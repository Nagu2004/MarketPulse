import { useRef, useState } from "react"
import axios from "axios"

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
        <div style={{ width: "400px", margin: "auto" }}>

           

            <div style={{
                border: "1px solid gray",
                padding: "10px",
                height: "300px",
                overflowY: "scroll"
            }}>
                {
                    data.map((e, index) => (
                        <div key={index}>
                            {
                                e.sender === "user" ?
                                    <p style={{ textAlign: "right", color: "blue" }}>
                                        {e.data}
                                    </p>
                                    :
                                    <p style={{ textAlign: "left", color: "green" }}>
                                        {e.data}
                                    </p>
                            }
                        </div>
                    ))
                }
            </div>

            <div style={{ marginTop: "10px" }}>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Type message..."
                    style={{ width: "75%" }}
                />
                <button onClick={senddata}>Send</button>
            </div>

        </div>
    )
}

export default Chatbot
