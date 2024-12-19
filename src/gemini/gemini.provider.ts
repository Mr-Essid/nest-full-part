import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";
import { Provider } from "@nestjs/common";
import { GEMINI_MODEL_NAME, GENERATION_CONFIG, SYSTEM_INSTRACTION } from "./gemini.config";

export const GeminiProModelProvider: Provider<GenerativeModel> = {
    provide: GEMINI_MODEL_NAME,
    useFactory: () => {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        return genAI.getGenerativeModel({
            model: process.env.GEMINI_MODEL_NAME,
            generationConfig: GENERATION_CONFIG,
            systemInstruction: SYSTEM_INSTRACTION
        });
    },
};
