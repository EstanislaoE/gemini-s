/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 * /////yarn add @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

//const apiKey = process.env.GEMINI_API_KEY; //website
// const API_KEY = "AIzaSyDOTvD5_Z6XPopFrFkiR6VLziK17-YwY5g";
// const MODEL_NAME = "gemini-1.5-flash";

// const model = genAI.getGenerativeModel({
//   //model: "gemini-1.5-flash", //website

// });

export async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: process.env.NEXT_PUBLIC_MODEL_NAME,
  });

  //const MODEL_NAME = "gemini-1.5-flash"; //vid
  // const model = genAI.getGenerativeModel({
  //   model: "gemini-1.5-flash", //website
  // });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 2092,
    responseMimeType: "text/plain",
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  // async function runChat(prompt) {
  //   //const genAI = new GoogleGenerativeAI(API_KEY);
  //   //const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  //   generationConfig;
  //   safetySettings;
  //   // history: [];

  //   // const chatSession = model.startChat({
  //   //   generationConfig,
  //   //   // safetySettings: Adjust safety settings
  //   //   // See https://ai.google.dev/gemini-api/docs/safety-settings

  //   //   safetySettings,
  //   //   history: [],
  //   // });

  //   //const result = await chatSession.sendMessage(prompt);
  const result = await runChat.sendMessage(prompt);
  const response = result.response;
  console.log(result.response.text());
  return response.text();
  // }
}
