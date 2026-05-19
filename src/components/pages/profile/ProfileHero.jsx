import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { fetchMioProfilo } from "../../../redux/actions";
import ProfileInfoModal from "./ProfileInfoModal";
import ProfilePicModal from "./ProfilePicModal";

const ProfileHero = () => {
  const profilo = useSelector((state) => state.profilo.mioProfilo);
  //  Questo è l'interruttore del modale all'inizio è spento (false)
  const [showInfoModal, setShowInfoModal] = useState(false);
  // Questo è l'interruttore del modale per il cambio foto profilo
  const [showPicModal, setShowPicModal] = useState(false);

  // // appena la pagina di carica parte la fetch
  // useEffect(() => {
  //   dispatch(fetchMioProfilo());
  // }, []); // o in caso capiamo successivamente a quale cambiamento far partire la fetch (dispatch)
  return (
    // aggiornamento con i dati reali get endpoint
    <Card className="shadow-sm mb-3">
      <div className="position-relative">
        {/* Immagine Bacheca */}
        <Card.Img
          src="/immbacheca.jpeg"
          variant="top"
          className="hero-banner"
          alt="Banner del profilo"
        />
        {/* Matita con bottone*/}
        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center p-2 shadow-sm border-0 "
          style={{ width: "36px", height: "36px" }}
          onClick={() => setShowPicModal(true)}
        >
          <Pencil size={16} className="text-black" />
        </Button>
      </div>

      <Card.Body className="position-relative">
        {/*  seconda matita */}
        <Button
          variant="link"
          className="position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center p-2 border-0 text-decoration-none "
          style={{ width: "36px", height: "36px", cursor: "pointer" }}
        >
          <Pencil
            style={{ cursor: "pointer" }}
            size={16}
            className="text-black"
          />
        </Button>
        {/* Foto profilo */}
        {/* Aggiunta dell' evento al click per aprire il modale del cambio foto */}
        <div
          className="profile-pic-container position-relative"
          onClick={() => setShowPicModal(true)} // Aggiunto evento al click
          style={{ cursor: "pointer" }} // puntatore
        >
          <Image
            src={profilo?.image}
            roundedCircle
            className="border border-white border-4 profile-pic"
            alt="Foto profilo"
          />
        </div>
        <Row className="mt-3">
          {/* Informazioni profilo */}
          <Col>
            {/* Nome */}
            {/* Nome e Cognome presi dal server endpoint */}
            <h2 className="fw-bold m-0">
              {profilo?.name} {profilo?.surname}
            </h2>
            {/* Occupazione */}
            <p className="lead fs-6 mt-1 mb-2 text-dark">
              {profilo?.title || "Nessuna qualifica inserita"}
            </p>
            {/* Dove vivo e Informazioni di contatto */}
            <p className="text-muted small m-0">
              {profilo?.area || "Italia"} ·{" "}
              {/* Quando clicchi qui sotto, l'interruttore diventa 'true' e apre il Modale */}
              <span
                className="text-primary fw-semibold"
                style={{ cursor: "pointer" }}
                onClick={() => setShowInfoModal(true)}
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
        <div className="d-flex flex-wrap gap-2 mt-3">
          <Button
            variant="primary"
            className="rounded-pill px-2 fw-semibold btn-sm"
          >
            Disponibile per
          </Button>
          <Button
            variant="outline-primary"
            className="rounded-pill px-2 fw-semibold btn-sm"
          >
            Aggiungi sezione
          </Button>
          <Button
            variant="outline-primary"
            className="rounded-pill px-2 fw-semibold text-dark border-secondary btn-sm"
          >
            Migliora profilo
          </Button>
          <Button
            variant="outline-primary"
            className="rounded-pill px-2 fw-semibold text-dark border-secondary btn-sm"
          >
            Risorse
          </Button>
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
                      {profilo?.area || "Italia"} +4 altre | In sede · Ibrido ·
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
          passiamo lo stato (showInfoModal), la funzione per chiuderla (setShowInfoModal(false)) + i dati profilo*/}
      <ProfileInfoModal
        show={showInfoModal}
        handleClose={() => setShowInfoModal(false)}
        profilo={profilo}
      />

      {/* MOdale per il cambio foto profilo */}
      <ProfilePicModal
        show={showPicModal}
        handleClose={() => setShowPicModal(false)}
        profilo={profilo}
      />
    </Card>
  );
};

export default ProfileHero;
