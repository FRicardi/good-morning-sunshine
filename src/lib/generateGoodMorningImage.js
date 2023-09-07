import { generateCompletion } from "./text/chatGptCompletion"
import { generateImage } from "./image/imagineGeneration";
import overlayTextOnImage from "./image/overlayTextOnImage";

export default async () => {
    const text = await generateCompletion();
    await generateImage();
    await overlayTextOnImage(text, "generated-image.png");
}