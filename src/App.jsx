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
import LoginPage from "./components/pages/login/LoginPage";
import { useSelector } from "react-redux";
import Network from "./components/pages/network/Network";
import MyNetwork from "./components/pages/mynetwork/MyNetwork";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchSavedProfiles());
      dispatch(fetchMioProfilo());
      dispatch(fetchJobs());
    }
  }, [dispatch, isAuthenticated]);
  return (
    <BrowserRouter>
      {/* SE NON SEI AUTENTICATO MOSTRA SOLO IL LOGIN */}
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
        /* SE SEI AUTENTICATO MOSTRA IL RESTO DELL'APP */
        <div className="d-flex flex-column w-100 min-vh-100">
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<OtherProfile />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/network" element={<Network />} />
            <Route path="/mynetwork" element={<MyNetwork />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Messaggistica />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
