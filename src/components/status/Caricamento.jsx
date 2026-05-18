import { Spinner } from "react-bootstrap";

const Caricamento = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5 w-100">
      <Spinner animation="border" variant="info" role="status" className="p-3">
        <span className="visually-hidden">Caricamento in corso...</span>
      </Spinner>
      <span className="ms-3 text-secondary fw-semibold">
        Caricamento dei dati...
      </span>
    </div>
  );
};

export default Caricamento;
