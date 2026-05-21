import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { effettuaLogin } from "../../../redux/reducers/authReducer";

const GoogleLoginModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const handleGoogleClick = () => {
    dispatch(effettuaLogin());
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="md"
      className="google-dark-modal"
    >
      <style>
        {`
          .google-dark-modal .modal-content {
            background-color: #202124;
            color: #e8eaed;
            border-radius: 8px;
            padding: 20px;
          }
        `}
      </style>

      <Modal.Body className="p-4">
        {/* Header Google */}
        <div className="d-flex align-items-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            width="25"
            className="me-2"
          />
          <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>Accedi</span>
        </div>

        <h4 className="mb-2" style={{ fontWeight: "600" }}>
          Utilizza LinkedIn con Google
        </h4>
        <p style={{ fontSize: "0.9rem", color: "#9aa0a6" }}>
          Scegli un account per continuare su LinkedIn
        </p>

        {/* Account Box */}
        <div
          className="d-flex align-items-center p-3 mt-4 mb-5 border rounded"
          style={{ borderColor: "#5f6368", cursor: "pointer" }}
          onClick={handleGoogleClick}
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#1a73e8",
              color: "white",
              fontWeight: "bold",
            }}
          >
            A
          </div>
          <div>
            <div style={{ fontWeight: "600", fontSize: "0.9rem" }}>
              Antonio Schettini
            </div>
            <div style={{ fontSize: "0.85rem", color: "#9aa0a6" }}>
              antonio.schettini93+epicode@gmail.com
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="d-flex justify-content-between pt-3 border-top border-secondary"
          style={{ fontSize: "0.75rem", color: "#9aa0a6" }}
        >
          <select className="bg-transparent border-0 text-secondary">
            <option>Italiano</option>
          </select>
          <div className="d-flex gap-3">
            <span>Guida</span>
            <span>Privacy</span>
            <span>Termini</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GoogleLoginModal;
