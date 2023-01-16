import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes';



function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
