import path from 'path';
import { fileURLToPath } from 'url';
import Jimp from "jimp";

export default async (
        /** @type {string} */ 
        text, 
        /** @type {string} */ 
        imagePath
    ) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const image = await Jimp.read(path.join(__dirname, `../../static/${imagePath}`));
    const font = await Jimp.loadFont(path.join(__dirname, "../../static/LuckiestGuyFont.fnt"));
    console.log("chegou aqui")
    image.print(font, 20, 30, text);

    await image.writeAsync("static/generated-image-with-text.png");
}
