import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/pages/profile/Profile";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid={true}>
      <Profile />
    </Container>
  );
}

export default App;
