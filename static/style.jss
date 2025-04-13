/* 🌟 General Styles */
body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #e0f7fa, #80d8ff);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* 🌟 Chatbot Window */
.chat-window {
    width: 420px;
    max-width: 90%;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 2px solid #007bff;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
}

/* 🌟 Chat Header */
.chat-header {
    background: #007bff;
    color: white;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 15px 15px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.chat-header img {
    width: 30px;
    height: 30px;
}

/* 🌟 Chat Box with Scrollbar */
.chat-box {
    height: 350px;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-top: 2px solid #007bff;
    border-bottom: 2px solid #007bff;
}

/* 🎚️ Custom Scrollbar */
.chat-box::-webkit-scrollbar {
    width: 6px;
}

.chat-box::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.chat-box::-webkit-scrollbar-thumb {
    background: #007bff;
    border-radius: 10px;
}

/* 🌟 Chat Bubbles */
.message {
    max-width: 75%;
    padding: 12px;
    margin: 10px;
    border-radius: 12px;
    position: relative;
    animation: fadeIn 0.3s ease-in-out;
}

/* ✨ User Message */
.user {
    background: #007bff;
    color: white;
    align-self: flex-end;
    border-top-right-radius: 0;
}

/* ✨ Bot Message */
.bot {
    background: white;
    color: black;
    align-self: flex-start;
    border-top-left-radius: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* 🩺 Doctor Avatar */
.bot img {
    width: 24px;
    height: 24px;
}

/* 🕒 Timestamp */
.timestamp {
    font-size: 10px;
    color: gray;
    position: absolute;
    bottom: -15px;
    right: 5px;
}

/* 🌟 Input Box */
.input-container {
    display: flex;
    align-items: center;
    background: white;
    padding: 10px;
    border-radius: 50px;
    margin-top: 10px;
    position: relative;
}

#user-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px;
    border-radius: 20px;
}

/* ✨ Send Button */
#send-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 50%;
    margin-left: 5px;
    transition: 0.3s;
}

#send-button:hover {
    background: #0056b3;
}

/* ⏳ Typing Indicator */
.typing {
    font-style: italic;
    color: gray;
    font-size: 14px;
    margin-left: 15px;
}

/* 🌟 Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}