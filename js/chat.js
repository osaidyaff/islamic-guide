// Islamic Guidance - AI Chat Logic

const ISLAMIC_SYSTEM_PROMPT = `You are a knowledgeable, respectful, and compassionate Islamic guide following the Sunnah (teachings of Prophet Muhammad ﷺ according to authentic hadith). Your role is to:

1. Answer questions about Islam accurately based on the Quran and authentic Sunnah
2. Be patient, kind, and welcoming to all - whether Muslim or non-Muslim
3. Provide evidence from Quran and Hadith when relevant
4. Explain concepts in simple, understandable terms
5. Address common misconceptions with wisdom and facts
6. Be respectful of other beliefs while clearly explaining Islamic positions
7. Focus on the core message of Tawheed (Oneness of Allah) and following the Prophet's example
8. Encourage good character, peace, and mercy as taught in Islam

When answering:
- Use "Allah" for God and add "ﷺ" (peace be upon him) after mentioning Prophet Muhammad
- Include relevant Quran verses or Hadith references when helpful
- Be encouraging and supportive to those seeking to learn
- For complex fiqh (jurisprudence) questions, recommend consulting local scholars
- Avoid sectarian debates; focus on agreed-upon core teachings from Quran and authentic Sunnah

Remember: Your goal is to guide people to the truth with wisdom and beautiful preaching (Quran 16:125).`;

class IslamicChat {
    constructor() {
        this.apiKey = null;
        this.messages = [];
        this.isProcessing = false;

        this.init();
    }

    init() {
        // Check for stored API key
        this.apiKey = Utils.getFromStorage('openai_api_key');

        // DOM elements
        this.chatContainer = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.sendButton = document.getElementById('send-btn');
        this.apiSetupSection = document.getElementById('api-setup');
        this.chatSection = document.getElementById('chat-section');
        this.apiKeyInput = document.getElementById('api-key-input');
        this.saveKeyButton = document.getElementById('save-key-btn');
        this.clearKeyButton = document.getElementById('clear-key-btn');

        if (this.apiKey) {
            this.showChat();
        } else {
            this.showApiSetup();
        }

        this.bindEvents();
        this.addWelcomeMessage();
    }

    bindEvents() {
        if (this.sendButton) {
            this.sendButton.addEventListener('click', () => this.sendMessage());
        }

        if (this.chatInput) {
            this.chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        if (this.saveKeyButton) {
            this.saveKeyButton.addEventListener('click', () => this.saveApiKey());
        }

        if (this.clearKeyButton) {
            this.clearKeyButton.addEventListener('click', () => this.clearApiKey());
        }
    }

    showApiSetup() {
        if (this.apiSetupSection) this.apiSetupSection.style.display = 'block';
        if (this.chatSection) this.chatSection.style.display = 'none';
    }

    showChat() {
        if (this.apiSetupSection) this.apiSetupSection.style.display = 'none';
        if (this.chatSection) this.chatSection.style.display = 'flex';
    }

    saveApiKey() {
        const key = this.apiKeyInput?.value?.trim();
        if (key && key.startsWith('sk-')) {
            this.apiKey = key;
            Utils.saveToStorage('openai_api_key', key);
            this.showChat();
            this.addSystemMessage('API key saved! You can now ask questions about Islam.');
        } else {
            alert('Please enter a valid OpenAI API key (starts with "sk-")');
        }
    }

    clearApiKey() {
        Utils.removeFromStorage('openai_api_key');
        this.apiKey = null;
        this.showApiSetup();
        if (this.apiKeyInput) this.apiKeyInput.value = '';
    }

    addWelcomeMessage() {
        const welcomeMessages = [
            "Assalamu Alaikum! (Peace be upon you)",
            "Welcome to the Islamic Guidance chat. I'm here to help answer your questions about Islam based on the Quran and authentic Sunnah.",
            "Feel free to ask anything - whether you're curious about Islamic beliefs, practices, history, or want to understand more about this beautiful religion.",
            "How can I help you today?"
        ];

        welcomeMessages.forEach((msg, index) => {
            setTimeout(() => {
                this.addMessage(msg, 'assistant');
            }, index * 300);
        });
    }

    addMessage(content, role) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}`;

        // Process content to highlight Arabic text
        let processedContent = content;

        // Convert markdown-style formatting
        processedContent = processedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        processedContent = processedContent.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Highlight Quran references
        processedContent = processedContent.replace(
            /(Surah [A-Za-z-]+ \d+:\d+(-\d+)?)/gi,
            '<span style="color: var(--gold); font-weight: 600;">$1</span>'
        );

        // Detect Arabic text and style it
        processedContent = processedContent.replace(
            /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\s]+)/g,
            '<span class="arabic-quote">$1</span>'
        );

        messageDiv.innerHTML = processedContent;
        this.chatContainer?.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addSystemMessage(content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message assistant';
        messageDiv.style.background = '#e8f5e9';
        messageDiv.style.fontStyle = 'italic';
        messageDiv.textContent = content;
        this.chatContainer?.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addLoadingMessage() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message assistant loading-message';
        loadingDiv.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                <span>Thinking...</span>
            </div>
        `;
        this.chatContainer?.appendChild(loadingDiv);
        this.scrollToBottom();
        return loadingDiv;
    }

    removeLoadingMessage(element) {
        element?.remove();
    }

    scrollToBottom() {
        if (this.chatContainer) {
            this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        }
    }

    async sendMessage() {
        if (this.isProcessing) return;

        const userMessage = this.chatInput?.value?.trim();
        if (!userMessage) return;

        if (!this.apiKey) {
            this.addSystemMessage('Please set up your OpenAI API key first.');
            this.showApiSetup();
            return;
        }

        // Clear input
        if (this.chatInput) this.chatInput.value = '';

        // Add user message to chat
        this.addMessage(userMessage, 'user');

        // Add to message history
        this.messages.push({
            role: 'user',
            content: userMessage
        });

        // Show loading
        this.isProcessing = true;
        const loadingElement = this.addLoadingMessage();

        try {
            const response = await this.callOpenAI(userMessage);
            this.removeLoadingMessage(loadingElement);

            if (response) {
                this.addMessage(response, 'assistant');
                this.messages.push({
                    role: 'assistant',
                    content: response
                });
            }
        } catch (error) {
            this.removeLoadingMessage(loadingElement);
            console.error('Chat error:', error);

            if (error.message.includes('401')) {
                this.addSystemMessage('Invalid API key. Please check your API key and try again.');
                this.clearApiKey();
            } else if (error.message.includes('429')) {
                this.addSystemMessage('Too many requests. Please wait a moment and try again.');
            } else {
                this.addSystemMessage('An error occurred. Please try again. Error: ' + error.message);
            }
        }

        this.isProcessing = false;
    }

    async callOpenAI(userMessage) {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: ISLAMIC_SYSTEM_PROMPT
                    },
                    ...this.messages.slice(-10) // Keep last 10 messages for context
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || 'I apologize, I could not generate a response. Please try again.';
    }
}

// Suggested questions for users
const suggestedQuestions = [
    "What are the Five Pillars of Islam?",
    "Who is Prophet Muhammad ﷺ?",
    "What does the Quran teach?",
    "How do Muslims pray?",
    "What is the meaning of Islam?",
    "What do Muslims believe about Jesus?",
    "Why do Muslims fast during Ramadan?",
    "What is Hajj pilgrimage?"
];

function loadSuggestedQuestions() {
    const container = document.getElementById('suggested-questions');
    if (!container) return;

    suggestedQuestions.forEach(question => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.margin = '0.25rem';
        btn.style.padding = '0.5rem 1rem';
        btn.style.fontSize = '0.9rem';
        btn.textContent = question;
        btn.onclick = () => {
            const input = document.getElementById('chat-input');
            if (input) {
                input.value = question;
                input.focus();
            }
        };
        container.appendChild(btn);
    });
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IslamicChat();
    loadSuggestedQuestions();
});
