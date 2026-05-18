import { Col, Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3} className="flex-column">
            <RightLanguageAndUrl />
            <WhoVisited />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
