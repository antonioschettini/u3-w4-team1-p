import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  PersonFill,
  CameraVideoFill,
  ImageFill,
  PencilSquare,
} from "react-bootstrap-icons";
import { creaNuovoPost } from "../../../redux/actions";

function CreatePost() {
  const profilo = useSelector((state) => state.profilo.mioProfilo);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  // Memoria per quello che scrivi e per la foto che carichi
  const [testoPost, setTestoPost] = useState("");
  const [immagineSelezionata, setImmagineSelezionata] = useState(null);

  // Funzione che parte quando premi "Pubblica"
  const gestisciPubblicazione = () => {
    if (testoPost.trim() === "") {
      alert("Scrivi qualcosa prima di pubblicare!");
      return;
    }

    // Mandiamo testo e immagine a Redux
    dispatch(creaNuovoPost(testoPost, immagineSelezionata));

    // Ripuliamo tutto e chiudiamo la finestrella
    setTestoPost("");
    setImmagineSelezionata(null);
    setShow(false);
  };

  return (
    <div style={{ maxWidth: 800 }}>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="d-flex align-items-center gap-2 mb-3">
            {profilo?.image ? (
              <img
                src={profilo.image}
                alt="profilo"
                className="rounded-circle flex-shrink-0"
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <PersonFill size={48} className="text-secondary flex-shrink-0" />
            )}
            <button
              className="btn btn-outline rounded-pill w-100 text-start border bg-light text-secondary"
              onClick={() => setShow(true)}
            >
              Inizia un post
            </button>
          </div>

          <div className="d-flex justify-content-between border-top pt-2">
            <button className="btn btn-light btn-sm d-flex align-items-center gap-2 py-2 border-0 bg-transparent text-secondary fw-bold">
              <CameraVideoFill size={20} color="#378fe9" />
              <span>Video</span>
            </button>
            <button className="btn btn-light btn-sm d-flex align-items-center gap-2 py-2 border-0 bg-transparent text-secondary fw-bold">
              <ImageFill size={20} color="#5f9b41" />
              <span>Foto</span>
            </button>
            <button className="btn btn-light btn-sm d-flex align-items-center gap-2 py-2 border-0 bg-transparent text-secondary fw-bold">
              <PencilSquare size={20} color="#e06847" />
              <span>Scrivi un articolo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modale */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 text-secondary">
            Crea un post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-2 mb-3">
            {profilo?.image ? (
              <img
                src={profilo.image}
                alt="profilo"
                className="rounded-circle flex-shrink-0"
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <PersonFill size={48} className="text-secondary flex-shrink-0" />
            )}
            <div>
              <p className="fw-bold mb-0 text-dark">
                {profilo?.name} {profilo?.surname}
              </p>
            </div>
          </div>

          {/* Colleghiamo il campo di testo alla nostra memoria */}
          <Form.Control
            as="textarea"
            className="border-0 shadow-none fs-5"
            rows={5}
            placeholder="Di cosa vuoi parlare?"
            value={testoPost}
            onChange={(e) => setTestoPost(e.target.value)}
          />

          {/* Mostriamo un'anteprima se l'utente sceglie una foto */}
          {immagineSelezionata && (
            <p className="text-success small mt-2">
              ✅ Immagine caricata pronta per l'invio
            </p>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <label
              htmlFor="upload-foto"
              style={{ cursor: "pointer" }}
              title="Aggiungi foto"
              className="p-2 rounded-circle bg-light"
            >
              <ImageFill size={24} color="#5f9b41" />
            </label>
            {/* Catturiamo il file scelto */}
            <input
              id="upload-foto"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setImmagineSelezionata(e.target.files[0])}
            />
          </div>
          <Button
            variant={testoPost.trim() ? "primary" : "secondary"} // Diventa blu solo se hai scritto qualcosa
            className="rounded-pill fw-bold px-4"
            disabled={!testoPost.trim()}
            onClick={gestisciPubblicazione} //Avvia la funzione
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreatePost;
