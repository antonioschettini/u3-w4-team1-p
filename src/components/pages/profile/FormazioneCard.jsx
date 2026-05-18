import { Book, PlusCircle, XLg, Pencil } from "react-bootstrap-icons";

function FormazioneCard() {
  return (
    <div
      className="card mb-3 shadow-sm"
      style={{ border: "1.5px dashed #c0cdd8" }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="card-title mb-0">Formazione</h5>
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
          Mostrando le tue qualifiche avrai fino a 2 volte più probabilità di
          ricevere un messaggio InMail da un recruiter.
        </p>

        <div className="d-flex gap-3 align-items-start border-bottom pb-3 mb-3">
          <div
            className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
            style={{ width: 44, height: 44, background: "#fef3c7" }}
          >
            <Book size={20} color="#92400e" />
          </div>
          <div>
            <p className="fw-semibold mb-0">Università degli Studi di Milano</p>
            <p className="text-muted small mb-0">
              Laurea Magistrale in Informatica
            </p>
            <p className="text-muted small mb-0">2017 - 2019</p>
          </div>
        </div>

        <div className="d-flex gap-3 align-items-start">
          <div
            className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
            style={{ width: 44, height: 44, background: "#fef3c7" }}
          >
            <Book size={20} color="#92400e" />
          </div>
          <div>
            <p className="fw-semibold mb-0">Università degli Studi di Milano</p>
            <p className="text-muted small mb-0">
              Laurea Triennale in Informatica
            </p>
            <p className="text-muted small mb-0">2014 - 2017</p>
          </div>
        </div>

        <button className="btn btn-outline-primary btn-sm rounded-pill mt-3">
          <PlusCircle size={13} className="me-1" />
          Aggiungi titolo di studio
        </button>
      </div>
    </div>
  );
}

export default FormazioneCard;
