import { Col, Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import WhoVisited from "./WhoVisited";
import ProfileHero from "./ProfileHero";
import Attività from "./Attività";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import Analisi from "./Analisi";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

const Profile = () => {
  return (
    <>
      <Container
        fluid={true}
        className="d-flex justify-content-center m-0 mx-md-5"
      >
        <Row className="justify-content-center px-5">
          <Col xs={12} md={8}>
            <ProfileHero />
            <ConsigliatoPerTe />
            <Analisi />
            <Attività />
          </Col>
          <Col xs={4} className="flex-column">
            <RightLanguageAndUrl />
            <WhoVisited />
            <PeopleYouMayKnow />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
