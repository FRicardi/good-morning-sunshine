import { GPT_API_KEY } from "$env/static/private";
import OpenAI from "openai";

const openai = new OpenAI({apiKey: GPT_API_KEY});

const generateCompletion = async () => {
    const completion = await openai.chat.completions.create({
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": "Gere uma mensagem de positividade e motivação com no máximo 50 caracteres, desejando um bom dia." }],
        "temperature": 1,
        "max_tokens": 150,
        "top_p": 1,
        "frequency_penalty": 0.5,
        "presence_penalty": 0.7
    });

    return completion.choices[0].message.content || "";
}

export {
    generateCompletion
}