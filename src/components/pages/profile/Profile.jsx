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
import { fetchSavedProfiles, fetchMioProfilo } from "../../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InformazioniBio from "./InformazioniBio";
import Caricamento from "../../status/Caricamento";
import AvvisoErrore from "../../status/AvvisoErrore";
import ExperienceModal from "./ExperienceModal";

const Profile = () => {
  const dispatch = useDispatch();
  // Leggiamo lo stato del caricamento, dell'errore e del profilo da Redux
  const loading = useSelector((state) => state.profilo.loadingProfilo);
  const errore = useSelector((state) => state.profilo.error);
  const profilo = useSelector((state) => state.profilo.mioProfilo);
  const [showExperienceModal, setShowExperienceModal] = useState(false);

  useEffect(() => {
    dispatch(fetchSavedProfiles());
    dispatch(fetchMioProfilo());
  }, [dispatch]);

  return (
    <div className=" min-vw-100 d-flex justify-content-center">
      <Container
        fluid={true}
        className="d-flex justify-content-center m-0 container-mw mt-3"
      >
        <Row className="justify-content-center px-0 ">
          {/* Controllo errori */}
          {errore && (
            <Col xs={12} md={12} className="mb-3">
              <AvvisoErrore messaggio={errore} />
            </Col>
          )}
          {/* Controllo caricamento */}
          {loading && (
            <Col xs={12}>
              <Caricamento />
            </Col>
          )}
          {/* Controllo se non ci sono caricamenti ed i dati sono arrivati */}

          {!loading && profilo && (
            <>
              {/* Sezione centrale main */}
              <Col xs={12} md={8}>
                <ProfileHero />
                <ConsigliatoPerTe />
                <Analisi />
                <Attività />
                <InformazioniBio />
                <EsperienzaCard
                  showModal={() => setShowExperienceModal(true)}
                />
                <CompetenzeCard />
                <FormazioneCard />
              </Col>

              {/* Colonna a Destra (aside) */}
              <Col xs={12} md={4} className="d-flex flex-column">
                <RightLanguageAndUrl />
                <WhoVisited />
                <PeopleYouMayKnow />
                <Interests />
              </Col>
            </>
          )}
        </Row>
      </Container>
      <ExperienceModal
        show={showExperienceModal}
        onHide={() => setShowExperienceModal(false)}
      />
    </div>
  );
};

export default Profile;
