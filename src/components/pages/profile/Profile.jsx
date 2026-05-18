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
        <Row>
          <Col xs={9}>
            <ProfileHero />
            <ConsigliatoPerTe />
            <Analisi />
            <Attività />
          </Col>
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
