import { QuestionCircle, Gear, Shield } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <footer className="bg-light py-4 mt-4 w-100">
  <Container>
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none ">Informazioni</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Linee guida della communità</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Privacy e condizioni ▾</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Sales Solutions</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Centro sicurezza</a>
          </Col>
          <Col xs={12} md={4}>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Accessibilità</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Carriera</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">
              Opzioni per gli annunci pubblicitari
            </a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Mobile</a>
          </Col>
          <Col xs={12} md={4}>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Talent Solutions</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Soluzioni di marketing</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Pubblicità</a>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Piccole imprese</a>
          </Col>
        </Row>

        <a href ="#" className="text-muted small border-top pt-3 text-decoration-none">
          LinkedIn Corporation © 2026
        </a>

        <Row className="align-items-start mt-2">
          <Col xs={12} md={6}>
            <div className="d-flex align-items-start gap-2 mb-2">
              <QuestionCircle size={20} className="text-muted flex-shrink-0" />
              <div>
                <a href ="#" className="fw-bold small mb-0 text-decoration-none text-dark d-block">Domande?</a>
                <a href ="#" className="text-muted small mb-0 text-decoration-none d-block">
                   Visita il nostro Centro assistenza.
                </a>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2 mb-2">
              <Gear size={20} className="text-muted flex-shrink-0" />
              <div>
                <a href ="#" className="fw-bold small mb-0 text-decoration-none text-dark d-block">
                  Gestisci il tuo account e la tua privacy
                </a>
                <a href ="#" className="text-muted small mb-0 text-decoration-none d-block">Vai alle impostazioni</a>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2">
              <Shield size={20} className="text-muted flex-shrink-0" />
              <div>
                <a href ="#" className="fw-bold small mb-0 text-decoration-none text-dark d-block">
                  Trasparenza sui contenuti consigliati
                </a>
                <a href ="#" className="text-muted small mb-0 text-decoration-none d-block">
                  Scopri di più sui contenuti consigliati.
                </a>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <a href ="#" className="text-muted small d-block mb-1 text-decoration-none">Seleziona lingua</a>
            <select className="form-select form-select-sm w-25">
              <option>Italiano </option>
              <option>English</option>
            </select>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
