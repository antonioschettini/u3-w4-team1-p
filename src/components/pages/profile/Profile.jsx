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
        <ProfileHero />
        <ConsigliatoPerTe />
        <Analisi />
        <Attività />

        <Col xs={3} className="flex-column">
          <RightLanguageAndUrl />
          <WhoVisited />
        </Col>
      </Container>
    </>
  );
};

export default Profile;
