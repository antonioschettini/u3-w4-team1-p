import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { PersonFill, ImageFill } from "react-bootstrap-icons"
import { creaNuovoPost } from "../../../redux/actions"

function CreatePostModal({ show, onClose }) {
  const profilo = useSelector((state) => state.profilo.mioProfilo)
  const dispatch = useDispatch()

  // Stati locali interni al modale
  const [testoPost, setTestoPost] = useState("")
  const [immagineSelezionata, setImmagineSelezionata] = useState(null)

  const resetForm = () => {
    setTestoPost("")
    setImmagineSelezionata(null)
  }

  const gestisciChiudi = () => {
    resetForm()
    onClose() // Comunica al padre di chiudere
  }

  const gestisciPubblicazione = () => {
    if (testoPost.trim() === "") {
      alert("Scrivi qualcosa prima di pubblicare!")
      return
    }

    // Invio a Redux
    dispatch(creaNuovoPost(testoPost, immagineSelezionata))

    // Reset e chiusura
    resetForm()
    onClose()
  }

  return (
    <Modal show={show} onHide={gestisciChiudi} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fs-5 text-secondary">Crea un post</Modal.Title>
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
  )
}

export default CreatePostModal
