import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  }
])

function App() {
  return (
    <>
      <div className="card">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
