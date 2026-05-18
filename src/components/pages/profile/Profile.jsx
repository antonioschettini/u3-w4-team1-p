import { Col, Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";
import ProfileHero from "./ProfileHero";
import Attività from "./Attività";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import Analisi from "./Analisi";

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center px-5">
          <Col xs={8}>
            <ProfileHero />
            <ConsigliatoPerTe />
            <Analisi />
            <Attività />
          </Col>
          <Col xs={4} className="flex-column">
            <RightLanguageAndUrl />
            <WhoVisited />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
