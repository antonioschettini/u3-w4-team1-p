import { useEffect, useState } from "react";
import { Briefcase, PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import { mioToken, removeUser } from "../../../redux/actions";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const FollowedCard = ({ profile }) => {
  const navigate = useNavigate();
  const [ultimaEsperienza, setUltimaEsperienza] = useState(null);
  const dispatch = useDispatch();

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
    <Col>
      <div
        className="card shadow-sm mb-2 overflow-hidden h-100"
        onClick={() => navigate(`/profile/${profile._id}`)}
        style={{ cursor: "pointer" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="person-medium"
          viewBox="0 0 552 138"
          data-token-id="384"
          className="w-100"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          style={{ height: "90px" }}
        >
          <g>
            <path fill="none" d="M0 0h552v138H0z"></path>
            <path fill="#d9e5e7" d="M0 0h552v138H0z"></path>
            <path fill="#bfd3d6" d="M380 0h172v138H380z"></path>
            <path
              fill="#a0b4b7"
              d="M333.22 0H0v138h333.22a207.93 207.93 0 0 0 0-138"
            ></path>
          </g>
        </svg>

        <div className="card-body pt-0 d-flex flex-column">
          <div
            style={{ marginTop: -50, marginBottom: 8 }}
            className="d-flex justify-content-center"
          >
            {profile?.image ? (
              <img
                src={profile.image}
                alt="profilo"
                className="rounded-circle border border-white border-3"
                width={100}
                height={100}
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
          <button
            className="visualizza-btn rounded-pill px-2 py-1 d-flex align-items-center mt-auto"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeUser(profile));
            }}
          >
            <span className="ms-1">Rimuovi</span>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default FollowedCard;
