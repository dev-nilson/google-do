import { Configuration, OpenAIApi } from "openai";

export const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  })
);
