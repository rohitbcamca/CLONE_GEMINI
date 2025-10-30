 
 
import { GoogleGenerativeAI } from "@google/generative-ai";

 
const API_KEY = "AIzaSyDk7qGOfFKf33DaaprbXpm69JGME82dag8";  

 
const genAI = new GoogleGenerativeAI(API_KEY);
 
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

 
export default async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log("AI Response:", text);
    return text;
  } catch (error) {
    console.error("Error in run():", error);
  }
}
