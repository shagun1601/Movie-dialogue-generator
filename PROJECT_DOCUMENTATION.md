# 🎬 Project Assessment: CineScript AI

## 1. Project Report (Executive Summary)

### Problem Identification & Innovation
The creative writing and screenwriting industries often face "writer's block" or struggle with maintaining consistent character voices across long scripts. Existing general-purpose LLMs can be too broad, often providing generic advice or failing to adhere to strict screenwriting formatting rules. **CineScript AI** solves this by providing a domain-constrained environment specifically tuned for filmmakers. It allows users to set "Creative Guardrails" using Genre and Tone filters, ensuring the AI remains within the cinematic domain.

### Technical Execution
- **API Integration**: Utilizes the `Groq SDK (Llama 3.3 70B Versatile)` API for high-speed, high-context dialogue generation.
- **System Prompting**: The model is initialized with a robust System Instruction that defines its persona as an "Expert Hollywood Screenwriter," preventing it from answering non-domain queries.
- **Parameter Control**: Users interact directly with `Temperature` and `Top-P` sliders, providing a hands-on understanding of LLM behavior variation.
- **Full-Stack Design**: Built with a Node.js backend to secure API keys and an interactive glassmorphism frontend for a premium user experience.

---

## 2. Assessment Questionnaire (INT428)

**Q1. Type of Chatbot Developed**
- [x] Generative (LLM-based)

**Q2. Platform Used for Deployment**
- [x] Web Application

**Q3. Deployment Link / Access Details**
- Deployment URL: `http://localhost:3000` (Local Development) / `GitHub Pages/Vercel (Proposed)`

**Q4. Type of API Used**
- [x] Groq API

**Q5. Model Name Used**
- Model Name: `Llama 3.3 70B Versatile`

**Q6. Model Version**
- Model Version: `llama-3.3-70b-versatile`


**Q7. Contextual Memory Usage**
- [x] Session-based memory (Maintains chat history during the active session)

**Q8. Flow of Data in the Chatbot**
1. **User Input**: User enters a prompt and selects genre/tone/parameters on the UI.
2. **Frontend Logic**: `script.js` captures inputs and sends a POST request to `/api/chat`.
3. **Backend Processing**: `server.js` receives the data, injects the system prompt, and calls the Groq SDK.
4. **Model Execution**: Llama 3.3 generates a response based on the "Movie Screenwriter" persona and custom parameters.
5. **Response Delivery**: The text is sent back to the frontend, parsed via `marked.js` for formatting, and displayed in the chat bubble.

**Q9. Model Parameters Used**
- **Temperature**: 0.0 to 1.5 (Default: 0.7)
- **Top-p**: 0.0 to 1.0 (Default: 0.9)
- **Input Token Limit**: 128k (Llama 3.3 Capacity)
- **Output Token Limit**: User-defined/Model Default


**Q10. Thinking Level & Role Assignment**
- **Thinking Level**: [x] Advanced (multi-step reasoning for dialogue flow)
- **Role Assigned**: [x] Domain Expert (Hollywood Screenwriter)

**Q11. Technology Stack Used**
- **Frontend**: HTML5, Vanilla CSS3, Javascript, Marked.js (for markdown).
- **Backend**: Node.js, Express.js, dotenv.
- **Hosting**: Local Node Server.

---

## 3. Presentation Slides (Outline)

- **Slide 1: Title & Introduction** (CineScript AI: The Future of Collaborative Screenwriting)
- **Slide 2: The Problem** (Writer's Block, Domain Inconsistency in Generic AI)
- **Slide 3: Our Solution** (Domain-Specific Movie Dialogue Generator)
- **Slide 4: Technical Stack** (Groq API, Node.js, Modern CSS)

- **Slide 5: Feature Demo** (Genre Selection, Parameter Tuning)
- **Slide 6: Model Configuration** (How Temperature affects creativity in scripts)
- **Slide 7: Societal Impact** (Democratizing scriptwriting for indie filmmakers)
- **Slide 8: Q&A**
