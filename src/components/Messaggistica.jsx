import { useState } from "react";
import { Image, Form, InputGroup } from "react-bootstrap";
import {
  ChevronUp,
  ChevronDown,
  ThreeDots,
  PencilSquare,
  Search,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Messaggistica = () => {
  // setto lo stato per il dropup se aperto o chiuso, parte da chiuso
  const [isOpen, setIsOpen] = useState(false);

  // foto profilo messaggistica da stato redux
  const profilo = useSelector((state) => state.profilo.mioProfilo);

  return (
    <div
      // 'position-fixed bottom-0 end-0' per fixarla nell'angolo in basso a destra della pagina
      className="position-fixed bottom-0 end-0 me-4 bg-white shadow rounded-top border"
      style={{
        width: "320px",
        zIndex: 1050,
        transition: "all 0.2s ease-in-out",
      }}
    >
      {/* intestazione sempre visibile in basso*/}
      <div
        className="d-flex align-items-center justify-content-between p-2 rounded-top bg-white"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)} // Se ci clicchi, si apre o si chiude
      >
        {/* foto profilo e titolo */}
        <div className="d-flex align-items-center gap-2">
          <Image
            src={profilo?.image || "https://placehold.co/150"}
            roundedCircle
            width="28"
            height="28"
            alt="La mia foto"
            style={{ objectFit: "cover" }}
          />
          <span
            className="fw-semibold text-dark small"
            style={{ fontSize: "0.85rem" }}
          >
            Messaggistica
          </span>
        </div>

        {/* icone di opzioni  */}
        <div
          className="d-flex align-items-center gap-3 text-secondary"
          onClick={(e) => e.stopPropagation()}
        >
          <ThreeDots
            size={16}
            className="text-dark"
            style={{ cursor: "pointer" }}
          />
          <PencilSquare
            size={16}
            className="text-dark"
            style={{ cursor: "pointer" }}
          />
          {/* freccia dropup con cambio se aperta o chiousa */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
            className="d-flex align-items-center"
          >
            {isOpen ? (
              <ChevronDown size={16} className="text-dark" />
            ) : (
              <ChevronUp size={16} className="text-dark" />
            )}
          </div>
        </div>
      </div>

      {/* corpo dei messaggi (visibile solo da aperto) */}
      {isOpen && (
        <div
          className="p-2 border-top bg-white"
          style={{ height: "360px", overflowY: "auto" }}
        >
          {/* barra di ricerca */}
          <InputGroup className="mb-2 mb-3 shadow-sm rounded">
            <InputGroup.Text className="bg-light border-end-0">
              <Search size={14} className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Cerca messaggi"
              className="bg-light border-start-0"
              style={{ fontSize: "0.85rem", height: "32px" }}
            />
          </InputGroup>
          {/* parte dei messaggi */}
          {/* messaggio fittizio linkedin */}
          <div
            className="d-flex align-items-center gap-2 p-2 rounded border-bottom"
            style={{ cursor: "pointer", backgroundColor: "#fff" }}
          >
            <Image
              src="https://img.icons8.com/color/48/linkedin.png"
              roundedCircle
              width="36"
              height="36"
            />
            <div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "220px" }}
              >
                <h6
                  className="m-0 fw-bold text-dark"
                  style={{ fontSize: "0.85rem" }}
                >
                  The LinkedIn Team
                </h6>
                <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                  13 apr 2025
                </span>
              </div>
              <p
                className="m-0 text-muted text-truncate"
                style={{ fontSize: "0.75rem", maxWidth: "210px" }}
              >
                tramite LinkedIn · Ciao Antonio, vorrei darti il benvenuto...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messaggistica;
