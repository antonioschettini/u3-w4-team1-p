import { Col, Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";
import ProfileHero from "./ProfileHero";
import Attività from "./Attività";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import Analisi from "./Analisi";
import CompetenzeCard from "./CompetenzeCard";
import EsperienzaCard from "./EsperienzaCard";
import FormazioneCard from "./FormazioneCard";

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
            <CompetenzeCard />
            <EsperienzaCard />
            <FormazioneCard />
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
