"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import "../global.css"

const ChatGlobal = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hola, ¿en qué puedo ayudarte hoy?", isUser: false, timestamp: "10:30 AM" },
    { id: 2, text: "Necesito información sobre el último pedido", isUser: true, timestamp: "10:32 AM" },
    { id: 3, text: "Claro, el pedido #12345 fue enviado ayer y llegará mañana.", isUser: false, timestamp: "10:33 AM" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim() === "") return

    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timestamp = `${formattedHours}:${formattedMinutes} ${ampm}`

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp,
    }

    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simular respuesta automática después de 1 segundo
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Aún no tengo base de datos para contestarte.",
        isUser: false,
        timestamp: `${formattedHours}:${formattedMinutes + 1 >= 60 ? "00" : formattedMinutes + 1} ${ampm}`,
      }
      setMessages((prevMessages) => [...prevMessages, botMessage])
    }, 1000)
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat IA</h2>
        <button className="expand-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6"></path>
            <path d="M9 21H3v-6"></path>
            <path d="M21 3l-7 7"></path>
            <path d="M3 21l7-7"></path>
          </svg>
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.isUser ? "user-message" : "bot-message"}`}>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-time">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <form onSubmit={handleSendMessage} className="chat-form">
          <div className="input-with-button">
            <input
              type="text"
              placeholder="Realiza una pregunta"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="chat-input"
            />
            <button type="submit" className="send-button">
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChatGlobal

