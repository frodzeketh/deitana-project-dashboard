// src/pages/ChatIA.jsx
import Dashboard from "../components/Dashboard"
import ChatGlobal from "../components/ChatGlobal"

const ChatIA = () => {
  return (
    <Dashboard activePage="ChatIA">
      <h1 className="page-title">Chat IA</h1>
      <div className="chat-wrapper">
        <ChatGlobal />
      </div>
    </Dashboard>
  )
}

export default ChatIA