import path from 'path';
import { fileURLToPath } from 'url';
import Jimp from "jimp";
import imageConfig from "./imageConfig";

export default async (
    /** @type {string} */
    text,
    /** @type {string} */
    imagePath
) => {
    const { image, font } = await loadImageAndFont(imagePath);

    const tidiedUpText = removeAccentsFromText(text);

    const backgroundTextImage = await generateBackgroundTextImage(tidiedUpText, font);

    image
        .resize(imageConfig.imageWidth, imageConfig.imageHeight)
        .blit(backgroundTextImage, 0, 0)
        .print(font,
            imageConfig.textDisplacement.x,
            imageConfig.textDisplacement.y,
            {
                text: tidiedUpText,
                alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            },
            imageConfig.imageWidth,
            imageConfig.imageHeight);

    await image.writeAsync("static/generated-image-with-text.png");
}

const removeAccentsFromText = (/** @type {string} */ text) => {
    var r = text.toLowerCase();
    const non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
    for (let i in non_asciis) { 
        // @ts-ignore
        r = r.replace(new RegExp(non_asciis[i], 'g'), i); 
    }
    return r;
}

const generateBackgroundTextImage = async (
    /** @type {string} */
    text,
    /** @type {import("@jimp/plugin-print").Font} */
    font
) => {
    let textImage = new Jimp(imageConfig.imageWidth, imageConfig.imageHeight, 0x0);
    textImage.print(font,
        0,
        imageConfig.imageHeight - imageConfig.textOffset,
        {
            text,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        },
        imageConfig.imageWidth,
        imageConfig.imageHeight);

    // @ts-ignore
    textImage.color([{ apply: 'xor', params: ["yellow"] }]);

    return textImage;
}

const loadImageAndFont = async (
    /** @type {string} */
    imagePath
) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const image = await Jimp.read(path.join(__dirname, `../../../static/${imagePath}`));
    const font = await Jimp.loadFont(path.join(__dirname, "../../../static/LuckiestGuyFont.fnt"));

    return {
        image,
        font
    }
}