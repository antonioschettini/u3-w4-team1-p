import { Container, Row } from "react-bootstrap";
import RightLanguageAndUrl from "./RightLanguageAndUrl";
import ProfileHero from "./ProfileHero";
import Analisi from "./Analisi";
import Attività from "./Attività";
import ConsigliatoPerTe from "./ConsigliatoPerTe";

const Profile = () => {
  return (
    <>
      <Container>
        <ProfileHero />
        <ConsigliatoPerTe />
        <Analisi />
        <Attività />

        <Row>
          <RightLanguageAndUrl />
        </Row>
      </Container>
    </>
  );
};

export default Profile;
