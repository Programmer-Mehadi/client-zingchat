import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import HomePage from "./components/HomePage/HomePage"
import SingleChat from "./components/SingleChat/SingleChat"
import GroupChat from "./components/GroupChat/GroupChat"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/single-chat/:userId",
    element: <SingleChat />,
  },
  {
    path: "/group-chat/:groupId",
    element: <GroupChat />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
])

function App() {
  return (
    <section className="bg-gray-100">
      <RouterProvider router={router} />
    </section>
  )
}

export default App
