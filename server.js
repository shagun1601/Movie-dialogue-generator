require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

console.log("GROQ_API_KEY Loaded:", process.env.GROQ_API_KEY ? "YES" : "NO");

app.post('/api/chat', async (req, res) => {
    try {
        const { message, history = [], temperature, topP, genre, tone } = req.body;

        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({
                error: "Missing GROQ_API_KEY in environment variables"
            });
        }

        const messages = [
            {
                role: "system",
                content: `You are CineScript-AI, an expert Hollywood screenwriter bot. Genre: ${genre}, Tone: ${tone}. Only generate cinematic dialogues.`
            },
            ...history.map(msg => ({
                role: (msg.role === 'model' || msg.role === 'assistant') ? 'assistant' : 'user',
                content: msg.content || msg?.parts?.[0]?.text || ""
            })),
            {
                role: "user",
                content: message
            }
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages,
            model: "llama-3.1-8b-instant",
            temperature: parseFloat(temperature) || 0.7,
            top_p: parseFloat(topP) || 0.9,
            max_tokens: 2048,
        });

        const reply = chatCompletion.choices[0]?.message?.content || "";

        res.json({ reply });

    } catch (error) {
        console.error("Groq Error:", error);
        res.status(500).json({
            error: error.message || "Internal server error"
        });
    }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});