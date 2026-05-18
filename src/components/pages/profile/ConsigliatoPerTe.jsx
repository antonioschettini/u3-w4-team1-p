import { FileEarmarkTextFill, EyeFill } from "react-bootstrap-icons";

function ConsigliatoPerTe() {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Consigliato per te</h5>
        <p className="text-muted small">
          <EyeFill size={14} className="me-1" />
          Visibile solo a te
        </p>

        <div className="d-flex align-items-start gap-3 p-3 border rounded">
          <FileEarmarkTextFill size={40} color="#0a66c2" />

          <div>
            <h6>Configura il tuo profilo in pochi minuti con un CV</h6>
            <p className="text-muted small">
              Carica un CV recente per compilare il profilo.
            </p>
            <button className="btn btn-primary btn-sm rounded-pill">
              Inizia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsigliatoPerTe;
