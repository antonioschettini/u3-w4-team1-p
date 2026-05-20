import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import MyNavbar from "./components/navbar/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Messaggistica from "./components/Messaggistica";
import NotFound from "./components/pages/notfound/NotFound";
import OtherProfile from "./components/pages/OtherProfile/OtherProfile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchJobs,
  fetchMioProfilo,
  fetchSavedProfiles,
} from "./redux/actions";
import Jobs from "./components/pages/jobs/jobs";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSavedProfiles());
    dispatch(fetchMioProfilo());
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="d-flex flex-column w-100">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<OtherProfile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Messaggistica />
      </div>
    </BrowserRouter>
  );
}

export default App;
