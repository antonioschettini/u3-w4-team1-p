import { Modal, Button, Image, Row, Col } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

function VerificationModal({ isOpen, onClose }) {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      centered
      size="md" //  larghezza media
    >
      <Modal.Body className="p-4">
        {/* Pulsante Indietro */}
        <Button
          variant="link"
          className="text-secondary d-flex align-items-center gap-1 ps-0 text-decoration-none fw-semibold mb-3"
          onClick={onClose}
          style={{ fontSize: "14px" }}
        >
          <ArrowLeft size={16} /> Indietro
        </Button>

        {/* Contenitore principale  */}
        <div className="text-center mx-auto" style={{ maxWidth: "420px" }}>
          {/* Icona del telefono */}
          <div className="mb-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4a4a4a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
              <line x1="10" y1="6" x2="14" y2="6"></line>
            </svg>
          </div>

          {/* Titolo principale */}
          <h4 className="fw-bold text-dark mb-3" style={{ fontSize: "22px" }}>
            Usa il tuo dispositivo mobile per la verifica
          </h4>

          {/* Sottotitolo descrittivo */}
          <p
            className="text-secondary mb-4 small"
            style={{ lineHeight: "1.4" }}
          >
            Segui le indicazioni per verificare la tua identità usando Persona
            sul tuo dispositivo mobile.
          </p>

          {/* Link per scaricare l'app */}
          <p
            className="text-start fw-semibold text-dark mb-3"
            style={{ fontSize: "15px" }}
          >
            Devi avere l’app LinkedIn.{" "}
            <a
              href="https://www.linkedin.com/mobile/"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-decoration-none fw-bold"
            >
              Scarica l’app LinkedIn
            </a>
          </p>

          {/* Sezione Grigia */}
          <Row className="g-3 p-3 bg-light rounded-3 align-items-center text-start border mx-0 mb-3">
            {/* Colonna per il QR Code */}
            <Col xs={12} sm={5} className="d-flex justify-content-center">
              <div
                className="bg-white p-2 border rounded shadow-sm"
                style={{ maxWidth: "140px" }}
              >
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/help/linkedin/answer/a1359065"
                  alt="LinkedIn Verification QR"
                  fluid
                />
              </div>
            </Col>

            {/* Colonna per le Istruzioni */}
            <Col xs={12} sm={7}>
              <span
                className="fw-bold text-dark d-block mb-2"
                style={{ fontSize: "14px" }}
              >
                Indicazioni:
              </span>
              {/* Lista  */}
              <ol className="ps-3 text-secondary mb-0 small d-flex flex-column gap-2">
                <li>Apri l’app della fotocamera sul telefono</li>
                <li>Inquadra il codice QR a sinistra</li>
                <li>Segui i passaggi sul telefono</li>
              </ol>
            </Col>
          </Row>

          {/* Link di aiuto finale */}
          <p className="text-muted small text-start mb-4">
            Scopri{" "}
            <a
              href="https://www.linkedin.com/help/linkedin/answer/a1359065"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-decoration-none fw-semibold"
            >
              come gli utenti possono confermare le loro informazioni.
            </a>
          </p>

          {/* Messaggio di attesa finale */}
          <p className="fw-bold text-dark text-start small mb-1">
            Questa pagina si aggiornerà una volta completata la verifica.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default VerificationModal;
