import { useEffect, useState } from "react";
import { Briefcase, PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import { mioToken } from "../../../redux/actions";

const FollowedCard = ({ profile }) => {
  const navigate = useNavigate();
  const [ultimaEsperienza, setUltimaEsperienza] = useState(null);

  useEffect(() => {
    if (!profile?._id) return;

    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
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
  }, [profile?._id]);
  return (
    <div
      className="card shadow-sm mb-2 overflow-hidden"
      onClick={() => navigate(`/profile/${profile.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src="/immbacheca.jpeg"
        alt="banner"
        style={{ height: 60, width: "100%", objectFit: "cover" }}
      />
      <div className="card-body pt-0">
        <div style={{ marginTop: -30, marginBottom: 8 }}>
          {profile?.image ? (
            <img
              src={profile.image}
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
          {profile?.name} {profile?.surname}
        </h6>
        <p className="text-muted small mb-1">{profile?.title}</p>
        <p className="text-muted small mb-3">{profile?.area}</p>
        {/* Mostra l'ultima esperienza se esiste */}
        {ultimaEsperienza && (
          <div className="d-flex align-items-center gap-2 border-top pt-2">
            <Briefcase size={16} className="text-secondary" />
            <div className="text-truncate">
              <p className="mb-0 small fw-semibold text-dark text-truncate">
                {ultimaEsperienza?.role}
              </p>
              <p className="mb-0 text-muted tiny text-truncate">
                {ultimaEsperienza?.company}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowedCard;
