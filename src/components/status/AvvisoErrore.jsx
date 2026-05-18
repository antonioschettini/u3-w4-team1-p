import { Alert } from "react-bootstrap";
import { ExclamationCircleFill } from "react-bootstrap-icons";

const AvvisoErrore = ({ messaggio }) => {
  return (
    <Alert
      variant="info"
      className="d-flex align-items-center border-0 shadow-sm rounded-3 my-3"
    >
      <ExclamationCircleFill size={20} className="me-3 text-info" />
      <div>
        <h5 className="alert-heading fw-bold mb-1 fs-6">
          Si è verificato un promemoria/errore
        </h5>
        <p className="m-0 small text-dark">
          {messaggio ||
            "Impossibile caricare i dati in questo momento. Riprova più tardi."}
        </p>
      </div>
    </Alert>
  );
};

export default AvvisoErrore;
