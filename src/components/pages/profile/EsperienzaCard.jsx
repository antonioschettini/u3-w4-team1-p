import { Briefcase, PlusCircle, Pencil, Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import ExperienceModal from "./ExperienceModal"; // Spostato qui per comodità

const mioToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";

function EsperienzaCard() {
  const userId = useSelector((rs) => rs.profilo.mioProfilo?._id);
  const [esperienze, setEsperienze] = useState([]);

  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [esperienzaSelezionata, setEsperienzaSelezionata] = useState(null);

  //  Funzione scarica le esperienze GET
  const scaricaEsperienze = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${mioToken}`,
          },
        },
      );
      if (response.ok) {
        const dati = await response.json();
        setEsperienze(dati);
      }
    } catch (error) {
      console.log("Errore nello scaricare le esperienze", error);
    }
  }, [userId]);

  //  Funzione elimina esperienza DELETE
  const eliminaEsperienza = async (expId) => {
    const conferma = window.confirm(
      "Vuoi davvero eliminare questa esperienza??",
    );
    if (!conferma) return;
    try {
      const risposta = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${mioToken}`,
          },
        },
      );

      if (risposta.ok) {
        alert("Esperienza eliminata con successo!");
        scaricaEsperienze(); // Rinfresca la lista subito
      } else {
        alert("Qualcosa è andato storto durante l'eliminazione.");
      }
    } catch (errore) {
      console.log("Errore durante la cancellazione:", errore);
    }
  };

  // Funzione per la PUT verrà inserita direttamente nel modale di inserimento
  // verrà avviata al click sulla matita
  const avviaModifica = (esperienza) => {
    setEsperienzaSelezionata(esperienza);
    setShowExperienceModal(true);
  };

  const avviaAggiunta = () => {
    setEsperienzaSelezionata(null);
    setShowExperienceModal(true);
  };

  // Effetto per avviare il caricamento
  useEffect(() => {
    if (userId) {
      scaricaEsperienze();
    }
  }, [userId, scaricaEsperienze]);

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        {/* Intestazione card */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="card-title mb-0">Esperienze</h5>
          <button
            className="btn btn-outline-primary btn-sm rounded-pill"
            onClick={avviaAggiunta}
          >
            <PlusCircle size={15} className="me-1" />
            Aggiungi
          </button>
        </div>

        <p className="text-muted small mb-4">
          Metti in risalto i risultati raggiunti e ottieni più visualizzazioni.
        </p>

        {/* Lista delle esperienze */}
        {esperienze.map((exp) => (
          <div
            key={exp._id}
            className="d-flex gap-3 align-items-start border-bottom pb-3 mb-3"
          >
            {/* Icona valigietta */}
            <Briefcase
              size={36}
              color="#1d4ed8"
              className="p-2 bg-light rounded"
            />

            {/* Contenuto principale */}
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="fw-bold mb-0 text-dark">{exp.role}</p>
                  <p className="mb-0 text-secondary small">{exp.company}</p>
                  <p className="text-muted tiny mb-0">
                    {exp.startDate ? exp.startDate.substring(0, 4) : ""} -{" "}
                    {exp.endDate ? exp.endDate.substring(0, 4) : "Presente"}
                  </p>
                  <p className="text-muted tiny mb-1">{exp.area}</p>
                </div>

                {/* Pulsanti Modifica ed Elimina */}
                <div className="d-flex gap-2">
                  {/* Tasto Modifica */}
                  <button
                    className="btn btn-light btn-sm text-secondary"
                    onClick={() => {
                      avviaModifica(exp);
                      console.log(exp);
                    }}
                  >
                    <Pencil size={14} />
                  </button>

                  {/* Tasto Elimina */}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => eliminaEsperienza(exp._id)}
                  >
                    <Trash size={14} />
                  </button>
                </div>
              </div>

              {/* Descrizione */}
              <p className="small mb-0 mt-2 text-secondary">
                {exp.description}
              </p>

              {/* Spazio per l'immagine */}
              {exp.image && (
                <div className="mt-3">
                  <img
                    src={exp.image}
                    alt="Allegato esperienza"
                    className="img-fluid rounded border"
                    style={{
                      maxHeight: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <ExperienceModal
        show={showExperienceModal}
        esperienzaSelezionata={esperienzaSelezionata}
        onHide={() => {
          setShowExperienceModal(false);
          setEsperienzaSelezionata(null);
        }}
        onFetchSuccess={scaricaEsperienze} // aggiorna lo schermo
      />
    </div>
  );
}

export default EsperienzaCard;
