const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const genreSelect = document.getElementById('genre');
const toneSelect = document.getElementById('tone');
const tempSlider = document.getElementById('temperature');
const topPSlider = document.getElementById('topP');
const tempVal = document.getElementById('temp-val');
const topPVal = document.getElementById('topP-val');
const clearBtn = document.getElementById('clear-chat');

let chatHistory = [];

// Update slider labels
tempSlider.addEventListener('input', (e) => {
    tempVal.textContent = e.target.value;
});

topPSlider.addEventListener('input', (e) => {
    topPVal.textContent = e.target.value;
});

// Append messages to UI
function appendMessage(role, text, isStartup = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role === 'user' ? 'user-message' : 'ai-message'}`;
    if (isStartup) msgDiv.classList.add('startup');

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = role === 'user' ? 'U' : 'AI';

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Use marked for better script formatting
    if (role === 'ai') {
        bubble.innerHTML = marked.parse(text);
    } else {
        bubble.textContent = text;
    }

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);
    chatContainer.appendChild(msgDiv);
    
    // Auto scroll
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Handle sending message
async function handleSend() {
    const message = userInput.value.trim();
    if (!message) return;

    // UI Updates
    appendMessage('user', message);
    userInput.value = '';
    userInput.disabled = true;
    sendBtn.disabled = true;

    // Prepare loading state
    const loadingId = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message ai-message loading';
    loadingDiv.id = loadingId;
    loadingDiv.innerHTML = `<div class="avatar">AI</div><div class="bubble">Typing dialogue...</div>`;
    chatContainer.appendChild(loadingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message,
                history: chatHistory,
                genre: genreSelect.value,
                tone: toneSelect.value,
                temperature: tempSlider.value,
                topP: topPSlider.value
            })
        });

        const data = await response.json();

        // Remove loading
        document.getElementById(loadingId).remove();

        if (data.reply) {
            appendMessage('ai', data.reply);
            // Update local history for multi-turn conversation
            chatHistory.push({ role: 'user', content: message });
            chatHistory.push({ role: 'assistant', content: data.reply });
        } else if (data.error) {
            appendMessage('ai', `Error: ${data.error}`);
        }
    } catch (error) {
        document.getElementById(loadingId).remove();
        appendMessage('ai', "Failed to connect to the screenwriter's room server.");
    } finally {
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.focus();
    }
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
});

clearBtn.addEventListener('click', () => {
    chatContainer.innerHTML = '';
    chatHistory = [];
    appendMessage('ai', 'Chat history cleared. Start fresh with a new scene setup.', true);
});
