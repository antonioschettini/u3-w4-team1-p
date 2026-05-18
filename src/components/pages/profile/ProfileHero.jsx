import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const ProfileHero = () => {
  return (
    <Card className="shadow-sm">
      <div className="position-relative">
        {/* Immagine Bacheca */}
        <Card.Img
          src="/immbacheca.jpeg"
          variant="top"
          className="hero-banner"
          alt="Banner del profilo"
        />
        {/*  {/* Matita con bottone*/}
        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center p-2 shadow-sm border-0 "
          style={{ width: "36px", height: "36px" }}
        >
          <Pencil size={16} className="text-black" />
        </Button>
      </div>

      <Card.Body className="position-relative">
        {/* 2. seconda matita */}
        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center p-2 shadow-sm border-0"
          style={{ width: "36px", height: "36px" }}
        >
          <Pencil size={16} className="text-black" />
        </Button>
        {/* Foto profilo */}
        <div className="profile-pic-container position-relative">
          <Image
            src="immprofilo.jpeg"
            roundedCircle
            className="border border-white border-4 profile-pic"
            alt="Foto profilo"
          />
        </div>
        <Row className="mt-3">
          {/* Informazioni profilo */}
          <Col>
            {/* Nome */}
            <h2 className="fw-bold m-0">Antonio Schettini</h2>
            {/* Occupazione */}
            <p className="lead fs-6 mt-1 mb-2 text-dark">
              Studente Full Stack Developer presso EPICODE Institute of
              Technology
            </p>
            {/* dove vivo */}
            <p className="text-muted small m-0">
              Bari, Puglia, Italia ·{" "}
              <span className="text-primary fw-semibold">
                Informazioni di contatto
              </span>
              {/* collegamenti */}
            </p>
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
            <Card className="bg-light border-0 rounded-3">
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="fw-bold m-0 small text-dark">
                      Disponibile a lavorare
                    </h6>
                    <p className="small m-0 text-muted mt-1">
                      Bari +4 altre | In sede · Ibrido · Da remoto
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
    </Card>
  );
};

export default ProfileHero;
