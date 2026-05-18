import { Briefcase, PlusCircle } from "react-bootstrap-icons";

function EsperienzaCard() {
  return (
    <div
      className="card mb-3 shadow-sm"
      style={{ border: "1.5px dashed #c0cdd8" }}
    >
      <div className="card-body">
        <h5 className="card-title">Esperienza</h5>
        <p className="text-muted small">
          Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più
          visualizzazioni del profilo e collegamenti.
        </p>

        <div className="d-flex gap-3 align-items-start border-bottom pb-3 mb-3">
          <Briefcase size={20} color="#1d4ed8" />
          <div>
            <p className="fw-semibold mb-0">Senior Frontend Developer</p>
            <p className="text-muted small mb-0">TechItalia S.r.l.</p>
            <p className="text-muted small mb-0">2022 - Presente · 2 anni</p>
            <p className="small mb-0">
              Sviluppo interfacce React con Redux e TypeScript.
            </p>
          </div>
        </div>

        <div className="d-flex gap-3 align-items-start">
          <Briefcase size={20} color="#1d4ed8" />

          <div>
            <p className="fw-semibold mb-0">Frontend Developer</p>
            <p className="text-muted small mb-0">WebAgency Milano</p>
            <p className="text-muted small mb-0">2019 - 2022 · 3 anni</p>
            <p className="small mb-0">Sviluppo siti web e applicazioni SPA.</p>
          </div>
        </div>

        <button className="btn btn-outline-primary btn-sm rounded-pill mt-3">
          <PlusCircle size={13} className="me-1" />
          Aggiungi esperienza
        </button>
      </div>
    </div>
  );
}

export default EsperienzaCard;
