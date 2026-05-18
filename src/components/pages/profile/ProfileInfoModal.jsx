import { Modal, Button } from "react-bootstrap";
import {
  Linkedin,
  Globe,
  Telephone,
  Envelope,
  Calendar,
} from "react-bootstrap-icons";

// Modale con 3 comandi
// show (se essere visibile o no), handleClose (cosa fare quando si chiude) e profilo (i dati)
const ProfileInfoModal = ({ show, handleClose, profilo }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      {/* Intestazione del modale con la X per chiudere */}
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fs-5 fw-normal text-dark">
          Informazioni di contatto
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4 pb-4">
        {/* Collegamento a LinkedIn */}
        <div className="d-flex align-items-start mb-3 mt-2">
          <Linkedin size={22} className="me-3 text-secondary mt-1" />
          <div>
            <h6 className="fw-semibold mb-0 text-dark small">Il tuo profilo</h6>
            <a
              href="#"
              className="small text-primary text-decoration-none fw-semibold"
            >
              linkedin.com/in/{profilo?.name?.toLowerCase()}-
              {profilo?.surname?.toLowerCase()}
            </a>
          </div>
        </div>

        {/* Sito Web e GitHub */}
        <div className="d-flex align-items-start mb-3">
          <Globe size={22} className="me-3 text-secondary mt-1" />
          <div>
            <h6 className="fw-semibold mb-0 text-dark small">Sito web</h6>
            <p className="small mb-0 text-primary fw-semibold cursor-pointer">
              github.com{" "}
              <span className="text-muted fw-normal">(portfolio)</span>
            </p>
            <p className="small mb-0 text-primary fw-semibold cursor-pointer">
              instagram.com{" "}
              <span className="text-muted fw-normal">(personale)</span>
            </p>
          </div>
        </div>

        {/* Telefono */}
        <div className="d-flex align-items-start mb-3">
          <Telephone size={22} className="me-3 text-secondary mt-1" />
          <div>
            <h6 className="fw-semibold mb-0 text-dark small">Telefono</h6>
            <p className="small mb-0 text-muted">3496037722 (cellulare)</p>
          </div>
        </div>

        {/* Email (preso dalla fetch) */}
        <div className="d-flex align-items-start mb-3">
          <Envelope size={22} className="me-3 text-secondary mt-1" />
          <div>
            <h6 className="fw-semibold mb-0 text-dark small">Email</h6>
            <a
              href={`mailto:${profilo?.email}`}
              className="small text-primary text-decoration-none fw-semibold"
            >
              {profilo?.email || "Email non presente"}
            </a>
          </div>
        </div>

        {/* Compleanno */}
        <div className="d-flex align-items-start mb-4">
          <Calendar size={22} className="me-3 text-secondary mt-1" />
          <div>
            <h6 className="fw-semibold mb-0 text-dark small">Compleanno</h6>
            <p className="small mb-0 text-muted">9 dicembre</p>
          </div>
        </div>

        {/*Pulsante blu in basso a destra per le modifiche */}
        <div className="d-flex justify-content-end mt-4">
          <Button
            variant="outline-primary"
            className="rounded-pill fw-semibold btn-sm px-3"
          >
            Modifica le informazioni di contatto
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileInfoModal;
