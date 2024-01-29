/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import io from "socket.io-client"

export default function SingleChat() {
  const socket = io("http://localhost:3000", {
    withCredentials: true,
    transports: ["websocket"],
  })
  const [messages, setMessages] = useState<any>([])
  const [message, setMessage] = useState<any>("")
  const [userId] = useState<any>(
    `userId-${Math.random().toString(36).slice(2, 9)}`
  )
  useEffect(() => {
    socket.on("connect", () => console.log(socket.id))
    // Clean up the socket connection on component unmount
    return () => {
      console.log("Disconnected from the server")
      socket.disconnect()
    }
  }, [])

  const sendMessage = () => {
    socket.emit("message", {
      message,
      userId,
    })
    socket.on("message", (newMessage) => {
      setMessages([...messages, newMessage])
    })
    setMessage("")
  }

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-96">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">Chat with John Doe</span>
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              Close
            </Link>
          </div>

          <div className="overflow-y-auto max-h-80">
            {messages.map((message: any, index: any) => (
              <div className="flex items-start mb-2" key={index}>
                <div className="flex-shrink-0">
                  <img
                    src="user-avatar.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="ml-3 bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">Hello there! 👋</p>
                </div>
              </div>
            ))}

            <div className="mt-4 flex items-center">
              <textarea
                placeholder="Type your message..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="resize-none border rounded-md w-full py-2 px-3 focus:outline-none"
              ></textarea>
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
                onClick={() => sendMessage()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
