import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registraUtente } from "../../../redux/reducers/authReducer";

const RegistrationModal = ({ show, handleClose, onOpenGoogle }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });

  const inviaRegistrazione = (e) => {
    e.preventDefault();
    dispatch(registraUtente(data));
    alert("Registrazione effettuata!");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold">Crea il tuo profilo</Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4 py-4">
        <Form onSubmit={inviaRegistrazione}>
          <Form.Group className="mb-3">
            <Form.Label className="text-muted small fw-semibold">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              required
              className="rounded-pill py-2 px-3"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-muted small fw-semibold">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              required
              className="rounded-pill py-2 px-3"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 rounded-pill btn-linkedin border-0 py-2 fw-bold"
          >
            Conferma registrazione
          </Button>
        </Form>

        {/* Separatore */}
        <div className="d-flex align-items-center my-1">
          <hr className="flex-grow-1" style={{ color: "#ccc" }} />
          <span className="mx-3 text-muted small">oppure</span>
          <hr className="flex-grow-1" style={{ color: "#ccc" }} />
        </div>

        {/* Bottone Google */}
        <Button
          variant="outline-secondary"
          className="w-100 rounded-pill py-2 fw-semibold d-flex align-items-center justify-content-center"
          style={{ borderColor: "#ccc" }}
          // USIAMO LA FUNZIONE PASSATA DAL GENITORE
          onClick={onOpenGoogle}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            width="20"
            className="me-2"
          />
          Continua con Google
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default RegistrationModal;
