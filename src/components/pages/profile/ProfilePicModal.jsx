import { useState } from "react";
import { Modal, Spinner, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchMioProfilo } from "../../../redux/actions";
const mioToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";
import Caricamento from "../../status/Caricamento";
import AvvisoErrore from "../../status/AvvisoErrore";

const ProfilePicModal = ({ show, handleClose, profilo }) => {
  const [caricamento, setCaricamento] = useState(false);
  const [messaggioErrore, setMessaggioErrore] = useState("");
  const dispatch = useDispatch();

  // funzione che parte quando scelgo il file da caricare
  const gestisciCambioFile = async (event) => {
    const fileSelezionato = event.target.files[0];
    if (!fileSelezionato) return;
    // creo il form data
    const datiForm = new FormData();
    datiForm.append("profile", fileSelezionato);
    setCaricamento(true);
    setMessaggioErrore("");

    try {
      //  post usando id del profilo preso da redux
      const risposta = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profilo._id}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${mioToken}`,
          },
          body: datiForm,
        },
      );

      if (risposta.ok) {
        // Se va a buon fine diciamo a redux di scaricare i dati aggiornati
        dispatch(fetchMioProfilo());
        handleClose(); // Chiudiamo il modale
      } else {
        setMessaggioErrore("Errore durante il caricamento della foto.");
      }
    } catch (errore) {
      console.error("Errore di rete:", errore);
      setMessaggioErrore("Impossibile connettersi al server.");
    } finally {
      setCaricamento(false);
    }
  };
  const eliminaFoto = async () => {
    // aggiornamento: non è possibile effettuare la chiamata delete, inganno l'utente con una post finta
    // chiediamo conferma prima di eliminare la foto
    const conferma = window.confirm("Sei sicuro di voler eliminare la foto??");
    if (!conferma) return; // se l'utente annula mi fermo
    setCaricamento(true);
    setMessaggioErrore("");

    try {
      const risposta = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT", // chiamata put per simulare il delete
          headers: {
            Authorization: `Bearer ${mioToken}`,
            "Content-Type": "application/json",
          },
          // uso come campo del json un link per la get successiva
          body: JSON.stringify({
            image:
              "https://ui-avatars.com/api/?name=Antonio+Schettini&size=250", // utilizzo un placeholder fittizio per ingannare l'utente
          }),
        },
      );
      if (risposta.ok) {
        dispatch(fetchMioProfilo()); // aggiorno lo stato e cancello l'imm
        handleClose(); // chiudo il banner
      } else {
        setMessaggioErrore("Errore durante l'eliminazione della foto.");
      }
    } catch (error) {
      console.log("Erorre di rete", error);
      setMessaggioErrore("Impossibile connettersi al server.");
    } finally {
      setCaricamento(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="bg-dark text-white rounded-4"
    >
      <Modal.Header closeButton closeVariant="white" className="border-0">
        <Modal.Title className="fs-5">Foto del profilo</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center p-4">
        {/* se c'è un errore monto il component errore */}
        {messaggioErrore !== "" && <AvvisoErrore messaggio={messaggioErrore} />}
        <img
          src={profilo?.image || "https://via.placeholder.com/250"}
          alt="Anteprima profilo"
          className="rounded-circle border border-secondary border-4"
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />

        {/* gestione caricamento ocn il component */}
        {caricamento && (
          <div className="mt-3">
            <Caricamento />
          </div>
        )}
      </Modal.Body>

      {/* i 3 bottoni di azione */}
      <Modal.Footer className="border-0 justify-content-between px-4 pb-4">
        {/* btn sinistro Aggiorna foto */}
        <label
          className={`btn btn-outline-light rounded-pill px-4 m-0 ${caricamento ? "disabled" : ""}`}
        >
          {caricamento ? (
            <Spinner size="sm" animation="border" />
          ) : (
            "Aggiorna foto"
          )}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={gestisciCambioFile}
            disabled={caricamento}
          />
        </label>

        {/* btn centrale Elimina foto */}
        <Button
          variant="danger"
          className="rounded-pill px-4"
          onClick={eliminaFoto}
          disabled={caricamento}
        >
          {caricamento ? (
            <Spinner size="sm" animation="border" />
          ) : (
            "Elimina foto"
          )}
        </Button>

        {/* btn destra Chiudi */}
        <Button
          variant="secondary"
          className="rounded-pill px-4"
          onClick={handleClose}
          disabled={caricamento}
        >
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfilePicModal;
