import { useSelector } from "react-redux";
import { PersonFill, Bookmark, ClipboardCheck, PencilSquare } from "react-bootstrap-icons";

function JobsLeftSidebar() {
  const profilo = useSelector((state) => state.profilo.mioProfilo);

  return (
    <div style={{ width: 225, flexShrink: 0 }}>

      {/* Card profilo */}
      <div className="card shadow-sm mb-2 overflow-hidden">
        <img src="/immbacheca.jpeg" alt="banner" style={{ height: 60, width: "100%", objectFit: "cover" }} />
        <div className="card-body pt-0">
          <div style={{ marginTop: -30, marginBottom: 8 }}>
            {profilo?.image ? (
              <img src={profilo.image} alt="profilo" className="rounded-circle border border-white border-3" width={60} height={60} style={{ objectFit: "cover" }} />
            ) : (
              <PersonFill size={60} className="text-secondary" />
            )}
          </div>
          <h6 className="fw-bold mb-0">{profilo?.name} {profilo?.surname}</h6>
          <p className="text-muted small mb-1">{profilo?.title}</p>
          <p className="text-muted small mb-3">{profilo?.area}</p>
        </div>
      </div>

      {/* Card link */}
      <div className="card shadow-sm mb-2">
        <div className="card-body">
          <div className="d-flex align-items-center gap-2 py-2 border-bottom" style={{ cursor: "pointer" }}>
            <Bookmark size={16} className="me-2" />
            <span className="small fw-semibold">Preferenze</span>
          </div>
          <div className="d-flex align-items-center gap-2 py-2 border-bottom" style={{ cursor: "pointer" }}>
            <ClipboardCheck size={16} className="me-2" />
            <span className="small fw-semibold">Tracker delle offerte di lavoro</span>
          </div>
          <div className="d-flex align-items-center gap-2 py-2 text-primary" style={{ cursor: "pointer" }}>
            <PencilSquare size={16} className="me-2" />
            <span className="small fw-semibold">Pubblica offerta di lavoro gratuita</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default JobsLeftSidebar;