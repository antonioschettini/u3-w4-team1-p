import { Modal, Button } from "react-bootstrap";

const LogoutModal = ({ show, onHide, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="h6 fw-bold">
          Sei sicuro di voler uscire?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-muted">
        Uscendo dal tuo account, dovrai reinserire le credenziali per riaccedere
        in futuro.
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button
          variant="outline-secondary"
          onClick={onHide}
          className="rounded-pill px-4"
        >
          Annulla
        </Button>
        <Button
          variant="primary"
          onClick={onConfirm}
          className="rounded-pill px-4"
          style={{ backgroundColor: "#0a66c2", border: "none" }}
        >
          Esci
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutModal;
