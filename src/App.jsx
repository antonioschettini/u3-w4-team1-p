import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "./components/pages/profile/Profile"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"
import { BrowserRouter, Route, Routes } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <MyNavbar />{" "}
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
