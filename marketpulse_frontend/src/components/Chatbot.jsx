import { useRef, useState } from "react"
import axios from "axios"
import "../style/chat.css"

function Chatbot() {

    const [data, setData] = useState([])
    const inputRef = useRef()

    const senddata = async () => {

        const userText = inputRef.current.value.trim()

        if (!userText) return

        // 1️ Add user message
        const userMsg = { data: userText, sender: "user" }
        setData(data => [...data, userMsg])

        inputRef.current.value = ""

        try {
            // 2️ Send POST request to Django
            const res = await axios.post(
                "http://127.0.0.1:8000/bot/chatbot/",
                { message: userText },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            // 3️ Add bot response
            const botMsg = { data: res.data.reply, sender: "robot" }
            setData(data => [...data, botMsg])

        } catch (err) {
            console.log(err)
        }
    }

   return (
    <div className="chat-container">

        <div className="chat-messages">
            {data.map((e, index) => (
                <div
                    key={index}
                    className={`message-row ${e.sender === "user" ? "user" : "robot"}`}
                >
                    <div className="message-bubble">
                        {e.data}
                    </div>
                </div>
            ))}
        </div>

        <div className="chat-input-area">
            <input
                type="text"
                ref={inputRef}
                placeholder="Type message..."
                onKeyDown={(e) => {
                    if (e.key === "Enter") senddata()
                }}
            />
            <button onClick={senddata}>Send</button>
        </div>

    </div>
)
}

export default Chatbot
