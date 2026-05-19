import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMioProfilo } from "../../../redux/actions";
import { PersonFill, Bookmark, People, Newspaper, Calendar, StarFill, PeopleFill } from "react-bootstrap-icons";

function LeftSidebar() {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profilo.mioProfilo);

  useEffect(() => {
    dispatch(fetchMioProfilo());
  }, [dispatch]);

  return (
    <>
     <div style={{ width: 220, flexShrink: 0 }}>
      {/* Card 1 — profilo */}
      <div className="card shadow-sm mb-2 overflow-hidden">
        <img src="/immbacheca.jpeg" alt="banner" style={{ height: 60, width: "100%", objectFit: "cover" }} />
        <div className="card-body pt-0">
          <div style={{ marginTop: -30, marginBottom: 8 }}>
            {profilo?.image ? (
              <img
                src={profilo.image}
                alt="profilo"
                className="rounded-circle border border-white border-3"
                width={60}
                height={60}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <PersonFill size={60} className="text-secondary" />
            )}
          </div>
          <h6 className="fw-bold mb-0">{profilo?.name} {profilo?.surname}</h6>
          <p className="text-muted small mb-1">{profilo?.title}</p>
          <p className="text-muted small mb-3">{profilo?.area}</p>
          <button className="btn btn-sm w-100" style={{ border: "1px dashed #aaa", borderRadius: 4 }}>
            + Esperienza
          </button>
        </div>
      </div>

      {/* Card 2 — Premium */}
      <div className="card shadow-sm mb-2">
        <div className="card-body" style={{ cursor: "pointer" }}>
          <p className="text-muted small mb-2">Accedi a strumenti e informazioni in esclusiva</p>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center justify-content-center rounded-2" style={{ width: 20, height: 20, background: "#f5a623" }}>
              <StarFill size={12} color="white" />
            </div>
            <span className="small fw-semibold">Prova Premium per 0 €</span>
          </div>
        </div>
      </div>

      {/* Card 3 — Collegamenti */}
      <div className="card shadow-sm mb-2">
        <div className="card-body d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
          <div>
            <p className="small fw-semibold mb-0">
              <PeopleFill size={14} className="me-1 text-muted" />
              Collegamenti
            </p>
            <p className="text-muted small mb-0">Amplia la tua rete</p>
          </div>
          <span className="text-primary fw-bold">0</span>
        </div>
      </div>

      {/* Card 4 — Link */}
      <div className="card shadow-sm mb-2">
        <div className="card-body">
          {[
            { icon: <Bookmark size={16} className="me-2" />, label: "Elementi salvati" },
            { icon: <People size={16} className="me-2" />, label: "Gruppi" },
            { icon: <Newspaper size={16} className="me-2" />, label: "Newsletter" },
            { icon: <Calendar size={16} className="me-2" />, label: "Eventi" },
          ].map((item) => (
            <div key={item.label} className="d-flex align-items-center py-2 border-bottom" style={{ cursor: "pointer" }}>
              {item.icon}
              <span className="small fw-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default LeftSidebar;