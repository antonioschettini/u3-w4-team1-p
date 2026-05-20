import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AvvisoErrore from "../../status/AvvisoErrore";
import Caricamento from "../../status/Caricamento";
import { useParams } from "react-router";

const OtherProfile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchProfile = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + id);
  };

  useEffect(() => {}, []);

  return (
    <div className="d-flex justify-content-center">
      <Container
        fluid={true}
        className="d-flex justify-content-center m-0 container-mw mt-3"
      >
        <Row className="justify-content-center px-0 ">
          {/* Controllo errori */}
          {error && (
            <Col xs={12} md={12} className="mb-3">
              <AvvisoErrore messaggio={error} />
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
                <EsperienzaCard />
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
    </div>
  );
};

export default OtherProfile;
