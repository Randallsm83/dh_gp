import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./routes/root";
import axios from "axios";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  }
])

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  return (
    <>
      <div className="card">
	<button onClick={apiCall}>Make API Call</button>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
