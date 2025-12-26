import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

// Initialize Gemini client
// Note: process.env.API_KEY is assumed to be available as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I cannot connect to the AI service right now. Please try again later or contact Mahesh directly.";
  }

  try {
    const model = "gemini-2.5-flash"; // Efficient for text tasks
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: RESUME_CONTEXT,
      }
    });

    return response.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble thinking right now. Please try again in a moment.";
  }
};