# Domain Knowledge Preparation: Screenwriting

This document details the research and domain knowledge used to configure the CineScript AI chatbot.

## 1. Information Sources Studied
- **John August’s Scriptnotes**: For understanding industry-standard screenplay formatting (Celtx/Final Draft standards).
- **StudioBinder Character Dialogue Guide**: To identify common user intents like "Subtext," "Parentheticals," and "Exposition."
- **WGA (Writers Guild of America) Manuals**: For standard script abbreviations (EXT., INT., O.S., V.O.).

## 2. Common User Queries & Intents
- **Intent**: Scene Setup.
  * *Query*: "Set a scene in a dystopian future where water is the main currency."
- **Intent**: Character Sparring.
  * *Query*: "Write a witty argument between a retired spy and a tech-naive barista."
- **Intent**: Format Correction.
  * *Query*: "How do I format a flashback sequence?"

## 3. Sample Questions & Expected AI Responses

| User Query | Expected Response Style | Rationale |
| :--- | :--- | :--- |
| "A noir detective enters a wet alley." | **INT. ALLEYWAY - NIGHT** <br> Rain slicks the bricks... | Adheres to SLUG-LINE and Action Lines format. |
| "Give me a romantic comedy greeting." | **SARAH**: (smiling) You're late. Again. <br> **CHRIS**: (puffing) I was busy... | Uses Character: (Parenthetical) Dialogue format. |
| "What is the best way to cook steak?" | "I am CineScript AI, specialized in movie dialogues. I cannot assist with recipes." | Domain constraint enforcement. |

## 4. Prompt Influence
The system instruction was designed to enforce the **Slugline-Action-Dialogue** structure found in industry scripts. By explicitly mentioning "EXT." and "INT." in the instructions, the model automatically formats scene headings correctly.
