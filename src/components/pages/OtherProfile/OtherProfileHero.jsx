import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { Pencil, SendFill } from "react-bootstrap-icons";
import { useEffect } from "react";
// import { fetchMioprofile } from "../../../redux/actions";

const OtherProfileHero = ({ profile }) => {
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <Card className="shadow-sm mb-3">
      <div className="position-relative">
        {/* Immagine Bacheca */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="person-medium"
          viewBox="0 0 552 138"
          data-token-id="384"
          className="c1217a46 _093caa33 _47abdd78 _6f907679 _4543c93a"
          role="img"
          fetchPriority="high"
          aria-label="Foto di copertina"
          aria-hidden="false"
          preserveAspectRatio="xMidYMid slice"
        >
          <g>
            <path fill="none" d="M0 0h552v138H0z"></path>
            <path fill="#d9e5e7" d="M0 0h552v138H0z"></path>
            <path fill="#bfd3d6" d="M380 0h172v138H380z"></path>
            <path
              fill="#a0b4b7"
              d="M333.22 0H0v138h333.22a207.93 207.93 0 0 0 0-138"
            ></path>
          </g>
        </svg>
      </div>
      <Card.Body className="position-relative">
        {/* Foto profile */}
        {/* Aggiunta dell' evento al click per aprire il modale del cambio foto */}
        <div className="profile-pic-container position-relative">
          <Image
            src={profile?.image}
            onError={(e) => {
              e.target.src =
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
            }}
            roundedCircle
            className="border border-white border-4 profile-pic"
            alt="Foto profile"
          />
        </div>
        <Row className="mt-3">
          {/* Informazioni profile */}
          <Col>
            {/* Nome */}
            {/* Nome e Cognome presi dal server endpoint */}
            <h2 className="fw-bold m-0">
              {profile?.name} {profile?.surname}
            </h2>
            {/* Occupazione */}
            <p className="lead fs-6 mt-1 mb-2 text-dark">
              {profile?.title || "Nessuna qualifica inserita"}
            </p>
            {/* Dove vivo e Informazioni di contatto */}
            <p className="text-muted small m-0">
              {profile?.area || "Italia"} ·{" "}
              {/* Quando clicchi qui sotto, l'interruttore diventa 'true' e apre il Modale */}
              <span
                className="text-primary fw-semibold"
                style={{ cursor: "pointer" }}
              >
                Informazioni di contatto
              </span>
            </p>
            {/* collegamenti */}
            <p className="text-primary small fw-semibold mt-1">
              100 collegamenti
            </p>
          </Col>
          {/* parte destra occupazione lavoro/studio */}
          <Col
            xs={12}
            md={4}
            className="d-flex align-items-start mt-2 mt-md-1 "
          >
            <Image
              src="/epicode-logo.png"
              alt="Logo Epicode"
              width="32"
              height="32"
              className="me-2"
            />
            <span
              className="fw-bold text-dark small"
              style={{ fontSize: "0.85rem" }}
            >
              EPICODE Institute of Technology
            </span>
          </Col>
        </Row>
        {/* pulsanti  */}
        <div className="d-flex flex-wrap gap-2 mt-3 align-items-center">
          <Button
            className="rounded-pill px-2 py-1 fw-semibold btn-sm"
            style={{ backgroundColor: "#0A66C2" }}
          >
            <SendFill />
            <span className="ms-1">Invia messaggio</span>
          </Button>
          <button className="visualizza-btn rounded-pill px-2 py-1 d-flex align-items-center">
            <span className="ms-1">Altro</span>
          </button>
        </div>
        {/* Box disponibile a lavorare */}
        <Row className="mt-4">
          <Col xs={12} md={6}>
            <Card
              className="border-0 rounded-3"
              style={{ background: "#DDE7F1" }}
            >
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="fw-bold m-0 small text-dark">
                      Disponibile a lavorare
                    </h6>
                    <p className="small m-0 text-muted mt-1">
                      {profile?.area || "Italia"} +4 altre | In sede · Ibrido ·
                      Da remoto
                    </p>
                    <span className="text-primary small fw-semibold d-block mt-1 cursor-pointer">
                      Mostra dettagli
                    </span>
                  </div>

                  {/* terza matita */}
                  <Pencil
                    size={16}
                    className="text-secondary cursor-pointer text-black"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
      {/*  Modale info contatto
          passiamo lo stato (showInfoModal), la funzione per chiuderla (setShowInfoModal(false)) + i dati profile*/}
      {/* <ProfileInfoModal
        show={showInfoModal}
        handleClose={() => setShowInfoModal(false)}
        profile={profile}
      /> */}

      {/* MOdale per il cambio foto profile */}
      {/* <ProfilePicModal
        show={showPicModal}
        handleClose={() => setShowPicModal(false)}
        profile={profile}
      /> */}
    </Card>
  );
};

export default OtherProfileHero;
