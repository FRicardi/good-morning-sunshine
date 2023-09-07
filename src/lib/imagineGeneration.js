import { writeFileSync } from 'fs';
import { IMAGINE_API_KEY } from "$env/static/private";

const generateImage = async () => {
    const formData = new FormData();
    formData.append("prompt", "A bunny at a colorful sunflower field");
    formData.append("style_id", "31");
    formData.append("steps", "40");
    formData.append("cfg", "4.5");
    
    const generateImageFetch = await fetch("https://api.vyro.ai/v1/imagine/api/generations", {
        headers: {
            "Authorization": `Bearer ${IMAGINE_API_KEY}`
        },
        body: formData,
        method: "POST"
    });

    const generatedImageBlob = await generateImageFetch.blob();
    
    writeFileSync(`static/generated-image.png`, Buffer.from(await
        generatedImageBlob.arrayBuffer()));
}

export {
    generateImage
}
