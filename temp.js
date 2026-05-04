// temp.js

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error('Missing GEMINI_API_KEY in .env');
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // 1. Try listing models
    try {
      const models = await genAI.listModels();
      console.log('Available models:', models);
    } catch (err) {
      console.error('listModels() error:', err.message);
    }

    // 2. Direct test (bypasses listModels issue)
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    const result = await model.generateContent('Say hello in one line');
    const text = result.response.text();

    console.log('Response:', text);

  } catch (err) {
    console.error('Error:', err.message);
  }
}

run();