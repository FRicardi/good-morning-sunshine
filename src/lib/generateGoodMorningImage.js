import { generateCompletion } from "./chatGptCompletion"
import { generateImage } from "./imagineGeneration";
import overlayTextOnImage from "./overlayTextOnImage";

export default async () => {
    const text = await generateCompletion();
    await generateImage();
    await overlayTextOnImage(text, "generated-image.png");
}