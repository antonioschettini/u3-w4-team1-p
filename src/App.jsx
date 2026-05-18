import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar"
import { BrowserRouter, Routes } from "react-router"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes></Routes>
      </BrowserRouter>
    </>
  )
}

export default App
