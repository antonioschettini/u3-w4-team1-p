<<<<<<< Updated upstream
import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "./components/pages/profile/Profile"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"
import { BrowserRouter, Route, Routes } from "react-router"
import Messaggistica from "./components/Messaggistica"
=======
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Messaggistica from "./components/Messaggistica";
import NotFound from "./components/pages/notfound/NotFound";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <MyNavbar />{" "}
        <Routes>
<<<<<<< Updated upstream
          <Route path="/" element={<Profile />} />
=======
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
>>>>>>> Stashed changes
        </Routes>
        <Messaggistica />
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
