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
import { fetchSavedProfiles } from "../../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSavedProfiles());
  }, []);

  return (
    <>
      <Container
        fluid={true}
        className="d-flex justify-content-center m-0 mx-md-5"
      >
        <Row className="justify-content-center px-0 px-md-5">
          <Col xs={12} md={8}>
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
            <PeopleYouMayKnow />
            <Interests />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
