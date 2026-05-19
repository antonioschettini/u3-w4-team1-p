import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";

import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router";
import MyFooter from "./components/MyFooter";
import Messaggistica from "./components/Messaggistica";
import NotFound from "./components/pages/notfound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column w-100">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Messaggistica />
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
