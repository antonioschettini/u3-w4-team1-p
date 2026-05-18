import { Col, Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";
import ProfileHero from "./ProfileHero";
import Attività from "./Attività";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import Analisi from "./Analisi";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import CompetenzeCard from "./CompetenzeCard";
import EsperienzaCard from "./EsperienzaCard";
import FormazioneCard from "./FormazioneCard";
import Interests from "./Interests";
import InformazioniBio from "./InformazioniBio";

const Profile = () => {
  return (
    <>
      <Container
        fluid={true}
        className="d-flex justify-content-center m-0 mx-md-5"
      >
        <Row className="justify-content-center px-0 px-md-5">
          {/* Sezione centrale main */}
          <Col xs={12} md={8}>
            <ProfileHero />
            <ConsigliatoPerTe />
            <Analisi />
            <Attività />
            <InformazioniBio />
            <CompetenzeCard />
            <EsperienzaCard />
            <FormazioneCard />
          </Col>
          {/* Colonna a Destra (aside) */}
          <Col xs={4} className="flex-column">
            <RightLanguageAndUrl />
            <WhoVisited />
            <PeopleYouMayKnow />
            <Interests />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
