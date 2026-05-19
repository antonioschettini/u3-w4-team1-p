import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "./components/pages/profile/Profile"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"
import { BrowserRouter, Route, Routes } from "react-router"
import Messaggistica from "./components/Messaggistica"

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column w-100">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
        <Messaggistica />
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
