import { Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";

const Profile = () => {
  return (
    <>
      <Container>
        <Row>
          <RightLanguageAndUrl />
          <WhoVisited />
        </Row>
      </Container>
    </>
  );
};

export default Profile;
