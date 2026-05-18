import { Card } from "react-bootstrap";
import { Pencil, Gem, ArrowRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const InformazioniBio = () => {
  // Prendiamo i dati del profilo che sono già stati scaricati da Redux
  const profilo = useSelector((state) => state.profilo.mioProfilo);

  return (
    <Card className="shadow-sm mb-3 border-0 p-4 rounded-3 bg-white">
      {/* Titolo e Matita per modificare */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-dark m-0 fs-5">Informazioni</h4>
        <Pencil
          size={18}
          className="text-secondary cursor-pointer hover-effect text-black"
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* biografia presa dal' endpoint server */}
      {/* 'whiteSpace: "pre-line"' serve a mantenere i paragrafi e gli elenchi ordinati */}
      <div
        className="text-dark lh-base mb-4"
        style={{ whiteSpace: "pre-line", fontSize: "0.92rem", color: "#333" }}
      >
        {profilo?.bio ||
          "Nessuna biografia inserita. Clicca sulla matita per aggiungerne una!"}
      </div>

      {/*  box in basso per Competenze principali  */}
      <div
        className="border border-light-subtle rounded-3 p-3 mt-2 card-hover"
        style={{ borderColor: "#dee2e6" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            {/* Diamante */}
            <Gem size={20} className="text-dark me-3" />
            <div>
              <h6 className="fw-bold text-dark m-0 small mb-1">
                Competenze principali
              </h6>
              {/* competenze */}
              <p className="text-muted m-0 small">
                Sviluppo front-end · Sviluppo Web back-end · React.js · Spring
                boot · Bootstrap
              </p>
            </div>
          </div>
          {/* Freccetta destra */}
          <ArrowRight
            size={18}
            className="text-dark"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </Card>
  );
};

export default InformazioniBio;
