import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Messaggistica from "./components/Messaggistica";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <MyNavbar />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Messaggistica />
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
