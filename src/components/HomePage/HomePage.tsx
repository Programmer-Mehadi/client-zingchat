import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center h-screen">
        <Link
          to="/single-chat/123"
          className="mr-4 bg-blue-500 hover:bg-blue-700 focus:outline-none text-white py-2 px-4 rounded-md font-semibold"
        >
          Single Chat
        </Link>
        <Link
          to="/group-chat/123"
          className="mr-4 bg-blue-500 hover:bg-blue-700 focus:outline-none text-white py-2 px-4 rounded-md font-semibold"
        >
          Group Chat
        </Link>
      </div>
    </div>
  )
}
