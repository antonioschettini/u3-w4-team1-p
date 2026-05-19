import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMioProfilo } from "../../../redux/actions";
import {
  PersonFill,
  Bookmark,
  People,
  Newspaper,
  Calendar,
  StarFill,
  PeopleFill,
  Briefcase,
} from "react-bootstrap-icons";

const mioToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";

function LeftSidebar() {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profilo.mioProfilo);

  // Stato per salvare l'ultima esperienza trovata
  const [ultimaEsperienza, setUltimaEsperienza] = useState(null);

  useEffect(() => {
    dispatch(fetchMioProfilo());
  }, [dispatch]);

  // fetch per prendere solo l'ultima esperienza
  useEffect(() => {
    if (!profilo?._id) return;

    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profilo._id}/experiences`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${mioToken}`,
        },
      },
    )
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((dati) => {
        if (dati && dati.length > 0) {
          // Prendiamo l'ultimo elemento della lista (il più recente inserito)
          setUltimaEsperienza(dati[dati.length - 1]);
        }
      })
      .catch((err) => console.log("Errore sidebar esperienze:", err));
  }, [profilo?._id]);

  return (
    
     <div className="d-none d-sm-block" style={{ width: 250, flexShrink: 0 }}>
      {/* Card 1 — profilo */}
      <div className="card shadow-sm mb-2 overflow-hidden">
        <img
          src="/immbacheca.jpeg"
          alt="banner"
          style={{ height: 60, width: "100%", objectFit: "cover" }}
        />
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
          <h6 className="fw-bold mb-0">
            {profilo?.name} {profilo?.surname}
          </h6>
          <p className="text-muted small mb-1">{profilo?.title}</p>
          <p className="text-muted small mb-3">{profilo?.area}</p>
          {/* Mostra l'ultima esperienza se esiste */}
          {ultimaEsperienza && (
            <div className="d-flex align-items-center gap-2 border-top pt-2 mb-3">
              <Briefcase size={16} className="text-secondary" />
              <div className="text-truncate">
                <p className="mb-0 small fw-semibold text-dark text-truncate">
                  {ultimaEsperienza.role}
                </p>
                <p className="mb-0 text-muted tiny text-truncate">
                  {ultimaEsperienza.company}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card 2 — Premium */}
      <div className="card shadow-sm mb-2">
        <div className="card-body" style={{ cursor: "pointer" }}>
          <p className="text-muted small mb-2">
            Accedi a strumenti e informazioni in esclusiva
          </p>
          <div className="d-flex align-items-center gap-2">
            <div
              className="d-flex align-items-center justify-content-center rounded-2"
              style={{ width: 20, height: 20, background: "#f5a623" }}
            >
              <StarFill size={12} color="white" />
            </div>
            <span className="small fw-semibold">Prova Premium per 0 €</span>
          </div>
        </div>
      </div>

      {/* Card 3 — Collegamenti */}
      <div className="card shadow-sm mb-2">
        <div
          className="card-body d-flex justify-content-between align-items-center"
          style={{ cursor: "pointer" }}
        >
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
            {
              icon: <Bookmark size={16} className="me-2" />,
              label: "Elementi salvati",
            },
            { icon: <People size={16} className="me-2" />, label: "Gruppi" },
            {
              icon: <Newspaper size={16} className="me-2" />,
              label: "Newsletter",
            },
            { icon: <Calendar size={16} className="me-2" />, label: "Eventi" },
          ].map((item) => (
            <div
              key={item.label}
              className="d-flex align-items-center py-2 border-bottom"
              style={{ cursor: "pointer" }}
            >
              {item.icon}
              <span className="small fw-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
