import { RouterProvider } from "react-router-dom"
import { Router } from "./services/router/router"

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
