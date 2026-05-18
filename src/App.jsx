import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/pages/profile/Profile";
import MyFooter from "./components/MyFooter";
import Messaggistica from "./components/Messaggistica";

function App() {
  return (
    <div className="d-flex flex-column align-items-center ">
      <Profile />
      <Messaggistica />
      <MyFooter />
    </div>
  );
}

export default App;
