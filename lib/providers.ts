export type ProviderId = "gemini" | "openai" | "deepseek";

export type Provider = {
  id: ProviderId;
  name: string;
  description: string;
  models: string[];
};

export const providers: Provider[] = [
  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google's Gemini models",
    models: ["Gemini model (configure later)", "Gemini fast model (configure later)"]
  },
  {
    id: "openai",
    name: "OpenAI",
    description: "OpenAI GPT models",
    models: ["GPT model (configure later)", "GPT fast model (configure later)"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "DeepSeek models",
    models: ["DeepSeek model (configure later)", "DeepSeek reasoning model (configure later)"]
  }
];
