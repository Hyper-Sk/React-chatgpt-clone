// import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai"; // Correct import

// const genAI = new GoogleGenerativeAI({ apiKey: "AIzaSyC6Pb5xUNXhXnOK_60JJYH1hYDRQdZmncY" }); // Initialize with GoogleGenerativeAI

// export async function getResponse(input) {
//   const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // Get the specific model

//   const chat = model.startChat({ // Use startChat() on the model instance
//     history: [
//       {
//         role: "user",
//         parts: [{ text: "Hello" }],
//       },
//       {
//         role: "model",
//         parts: [{ text: "Great to meet you. What would you like to know?" }],
//       },
//     ],
//   });

//   const result = await chat.sendMessage({ // Use sendMessage with the correct structure
//     parts: [{ text: input }],
//   });
//   const responseText = await result.response.text(); // Ensure you await the text() method
//   console.log(responseText);
// }

// // Example of calling getResponse with an input
// await getResponse("What is the capital of India?");