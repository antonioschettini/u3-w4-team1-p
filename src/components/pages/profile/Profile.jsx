import { Col, Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <p>Ciao</p>
        </Col>
        <Col xs={3} className="d-flex flex-column">
          <RightLanguageAndUrl />
          <WhoVisited />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
