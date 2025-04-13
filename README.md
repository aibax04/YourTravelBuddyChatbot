TravelBuddy is a smart travel assistant chatbot powered by Generative AI. It helps users ask questions about various travel destinations like Kedarnath, Manali, Rishikesh, etc., and get informative, context-rich answers in real time.


🔧 Tech Stack Used
Component	Technology / Library	Purpose
Frontend	HTML, CSS, JavaScript	User-friendly chat UI
Backend	Flask (Python)	Web server to handle user requests
Embeddings	sentence-transformers/all-MiniLM-L6-v2	Convert text into 384-dim vector embeddings
Vector DB	Pinecone	Stores vectorized travel info for semantic search
LLM / Model	llama-2-7b-chat.ggmlv3.q4_0.bin via CTransformers	(Optional) Generative response model
LangChain	LangChain + PromptTemplate	Structured prompt handling and QA pipeline
Environment	.env + python-dotenv	Secure API key management
⚙️ How It Works (End-to-End Flow)
User enters a travel query on the chat interface (e.g., "Tell me about Kedarnath").

The input is embedded using the sentence-transformers/all-MiniLM-L6-v2 model into a 384-dimensional vector.

This query vector is searched in Pinecone, which holds embedded travel information.

Pinecone returns the most relevant travel chunks from stored metadata.

(Optional) The matched context is passed to a local LLM (llama-2) via LangChain for a generated answer.

The final response is shown in the chat window.

📦 Features
🚀 Fast vector similarity search with Pinecone

🧠 Accurate embeddings using MiniLM from HuggingFace

🔐 Secure & scalable Flask backend

💬 Real-time conversational interface

🗺️ Trained on diverse travel documents/text chunks

🛠️ Customization Options
Replace static text chunks with PDF ingestion

Add authentication/login

Connect to live travel APIs (weather, hotels, etc.)

Improve answer generation with OpenAI/Gemini API

