import { Col, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";

const Profile = () => {
  return (
    <Row>
      <Col xs={3} className="flex-column">
        <RightLanguageAndUrl />
        <WhoVisited />
      </Col>
    </Row>
  );
};

export default Profile;
