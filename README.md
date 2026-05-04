# CineScript AI: Movie Dialogue Generator

CineScript AI is a domain-specific generative AI chatbot designed for screenwriters, filmmakers, and creative writers. It specializes in crafting cinematic dialogues, character interactions, and scene setups based on user-defined genres, tones, and model parameters.

## ✨ Features
- **Domain Specificity**: Hard-constrained to the filmmaking/screenwriting domain.
- **Dynamic Configuration**: Adjustable **Temperature** and **Top-P** settings for controlling creativity vs. factual deterministic output.
- **Contextual Awareness**: Genre and Tone filters that influence the system prompt dynamically.
- **Markdown Support**: Renders scripts in professional screenwriting formats (Scene Headings, Parentheticals, Dialogue).
- **Responsive UI**: Premium glassmorphism design with dark mode aesthetics.

## 🛠️ Technology Stack
- **Frontend**: HTML5, Vanilla CSS, Javascript (ES6+).
- **Backend**: Node.js, Express.js.
- **AI Integration**: Groq SDK (Llama 3.3 70B Versatile).
- **Styling**: Modern CSS with HSL color tokens and animations.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js installed.
- A Groq API Key from [Groq Console](https://console.groq.com/).

### 2. Setup
1. Clone or download this project.
2. Open the `.env` file in the root directory.
3. Add your Groq API Key:
   ```env
   GROQ_API_KEY=your_actual_api_key_here
   PORT=3000
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

### 3. Run the Application
```bash
node server.js
```

The application will be accessible at `http://localhost:3000`.

## 🧠 Model Parameters Explained
- **Temperature (0.0 - 1.5)**: 
  - *Low (0.3)*: Deterministic, factual, and predictable dialogues. Good for historical dramas.
  - *High (1.2+)*: Creative, experimental, and varied responses. Good for Surrealism or Sci-Fi.
- **Top-P (0.0 - 1.0)**:
  - Controls the diversity of the output. Lower values restrict the model to the most likely tokens (safer), while higher values allow for a broader range of expressions.

## 📜 Academic Compliance
This project was developed as part of the INT428 Project-Based Assessment. It demonstrates:
- API Integration (Google Gemini).
- Prompt Engineering (System Instructions).
- Front-end Design Excellence.
- Domain-Aware AI implementation.
