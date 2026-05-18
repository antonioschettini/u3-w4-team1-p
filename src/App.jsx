import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/pages/profile/Profile";
import MyFooter from "./components/MyFooter";

function App() {
  return (
       <div className="d-flex flex-column align-items-center ">
      <Profile />
      <MyFooter />
    </div>
  );
}

export default App;