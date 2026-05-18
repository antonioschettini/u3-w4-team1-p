import { Star, PlusCircle, XLg, Pencil } from "react-bootstrap-icons";

function CompetenzeCard() {
  return (
    <div
      className="card mb-3 shadow-sm"
      style={{ border: "1.5px dashed #c0cdd8" }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="card-title mb-0">Competenze</h5>
          <div className="d-flex gap-2">
            <button className="btn btn-light btn-sm">
              <Pencil size={16} />
            </button>
            <button className="btn btn-light btn-sm">
              <XLg size={20} />
            </button>
          </div>
        </div>
        <p className="text-muted small">
          Fai capire se hai un profilo adatto per le nuove opportunità: il 50%
          dei recruiter usa i dati sulle competenze per coprire le posizioni
          aperte.
        </p>

        <p className="small fw-semibold text-muted border-bottom pb-1 mb-2">
          Soft skill
        </p>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge border text-dark fw-normal px-3 py-2 align-items-center">
            <Star className="me-1 text-warning" />
            Teamwork
          </span>
          <span className="badge border text-dark fw-normal px-3 py-2 align-items-center">
            <Star className="me-1 text-warning" />
            Problem Solving
          </span>
          <span className="badge border text-dark fw-normal px-3 py-2 align-items-center">
            <Star className="me-1 text-warning" />
            Comunicazione
          </span>
        </div>

        <p className="small fw-semibold text-muted border-bottom pb-1 mb-2">
          Competenze tecniche
        </p>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge bg-primary fw-normal px-3 py-2">React</span>
          <span className="badge bg-primary fw-normal px-3 py-2">Redux</span>
          <span className="badge bg-primary fw-normal px-3 py-2">
            JavaScript
          </span>
          <span className="badge bg-primary fw-normal px-3 py-2">
            TypeScript
          </span>
          <span className="badge bg-primary fw-normal px-3 py-2">HTML</span>
          <span className="badge bg-primary fw-normal px-3 py-2">CSS</span>
          <span className="badge bg-primary fw-normal px-3 py-2">Git</span>
        </div>

        <button className="btn btn-outline-primary btn-sm rounded-pill">
          <PlusCircle size={13} className="me-1" />
          Aggiungi competenze
        </button>
      </div>
    </div>
  );
}

export default CompetenzeCard;
