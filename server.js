require('dotenv').config({ path: __dirname + '/.env' });

const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// Debug once at startup
console.log("Loaded GROQ_API_KEY:", process.env.GROQ_API_KEY ? "YES" : "NO");

app.post('/api/chat', async (req, res) => {
    try {
        const { message, history, temperature, topP, genre, tone } = req.body;

        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({
                error: "Missing Groq API Key. Ensure .env is correctly loaded."
            });
        }

        // Map history to Groq format (OpenAI compatibility)
        const messages = [
            {
                role: "system",
                content: `You are CineScript-AI, an expert Hollywood screenwriter bot. Your domain is strictly creating movie dialogues, characters, and scenes. The current Scene Genre is: ${genre}. The Tone is: ${tone}. Only respond with script formats, dialogue ideas, screenwriting advice, or cinematic descriptions. Do not answer general queries outside of movie/TV writing.`
            },
            ...history.map(msg => ({
                role: (msg.role === 'model' || msg.role === 'assistant') ? 'assistant' : 'user',
                content: msg.content || (msg.parts && msg.parts[0]?.text) || ""
            })),
            {
                role: "user",
                content: message
            }
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: "llama-3.1-8b-instant",
            temperature: parseFloat(temperature) || 0.7,
            top_p: parseFloat(topP) || 0.9,
            max_tokens: 2048,
        });

        const reply = chatCompletion.choices[0]?.message?.content || "";

        res.json({ reply });

    } catch (error) {
        console.error("Error generating dialogue with Groq:", error);
        res.status(500).json({
            error: error.message || "Internal server error"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`CineScript AI Server (Groq) running on http://localhost:${PORT}`);
});