import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AvvisoErrore from "../../status/AvvisoErrore";
import Caricamento from "../../status/Caricamento";
import { useParams } from "react-router";
import { profileApiLink } from "../../../redux/actions";
import { mioToken } from "../profile/ProfilePicModal";
import PeopleYouMayKnow from "../profile/PeopleYouMayKnow";
import Interests from "../profile/Interests";
import OtherProfileHero from "./OtherProfileHero";
import OtherEsperienzaCard from "./OtherEsperienzaCard";
import OtherInformazioniBio from "./OtherInformazioniBio";

const OtherProfile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({});
  const [experiences, setExperiences] = useState({});
  const fetchProfile = () => {
    fetch(profileApiLink + id, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${mioToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Profile response not ok: ", res.status);
        }
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };
  const fetchExperiences = () => {
    fetch(profileApiLink + id + "/experiences", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${mioToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Experience response not ok: ", res.status);
        }
      })
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchProfile();
    fetchExperiences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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

          {!loading && profile && (
            <>
              {/* Sezione centrale main */}
              <Col xs={12} md={8}>
                <OtherProfileHero profile={profile} />
                <OtherInformazioniBio profile={profile} />
                <OtherEsperienzaCard experiences={experiences} />
              </Col>

              {/* Colonna a Destra (aside) */}
              <Col xs={12} md={4} className="d-flex flex-column">
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
