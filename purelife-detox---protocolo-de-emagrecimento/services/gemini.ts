import { GoogleGenAI, Type, Schema } from "@google/genai";
import { DetoxPlan, Recipe } from "../types";

const apiKey = process.env.API_KEY;

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: apiKey });

export const generatePersonalizedDetoxPlan = async (
  age: number,
  weight: number,
  goal: string,
  preferences: string
): Promise<DetoxPlan | null> => {
  try {
    const model = "gemini-2.5-flash";
    
    const schema: Schema = {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING, description: "Nome criativo para o plano de detox" },
        description: { type: Type.STRING, description: "Breve resumo motivacional do plano" },
        days: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.STRING, description: "Dia 1, Dia 2, etc." },
              meals: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    type: { type: Type.STRING, description: "Café da Manhã, Almoço, Jantar ou Lanche" },
                    name: { type: Type.STRING, description: "Nome da refeição" },
                    ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
                    calories: { type: Type.NUMBER, description: "Calorias estimadas" }
                  },
                  required: ["type", "name", "ingredients", "calories"]
                }
              }
            },
            required: ["day", "meals"]
          }
        }
      },
      required: ["title", "description", "days"]
    };

    const prompt = `Crie um plano de detox de 3 dias para uma pessoa de ${age} anos, pesando ${weight}kg.
    O objetivo principal é: ${goal}.
    Preferências alimentares ou restrições: ${preferences}.
    O plano deve ser saudável, focado em alimentos naturais, sucos detox e refeições leves.
    Retorne APENAS o JSON conforme o esquema.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as DetoxPlan;
    }
    return null;
  } catch (error) {
    console.error("Erro ao gerar plano:", error);
    return null;
  }
};

export const findHealthyRecipes = async (ingredientOrType: string): Promise<Recipe[] | null> => {
  try {
    const model = "gemini-2.5-flash";

    const schema: Schema = {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                name: { type: Type.STRING },
                description: { type: Type.STRING },
                timeToPrep: { type: Type.STRING },
                calories: { type: Type.NUMBER },
                ingredients: { type: Type.ARRAY, items: { type: Type.STRING }},
                instructions: { type: Type.ARRAY, items: { type: Type.STRING }}
            },
            required: ["name", "description", "timeToPrep", "calories", "ingredients", "instructions"]
        }
    };

    const prompt = `Sugira 3 receitas saudáveis e detox baseadas em: ${ingredientOrType}.
    As receitas devem ser em português, simples de fazer e focadas em perda de peso.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as Recipe[];
    }
    return null;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    return null;
  }
};