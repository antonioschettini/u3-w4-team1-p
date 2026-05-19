import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  PersonFill,
  CameraVideoFill,
  ImageFill,
  PencilSquare,
} from "react-bootstrap-icons";

function CreatePost() {
  const profilo = useSelector((state) => state.profilo.mioProfilo);
  const [show, setShow] = useState(false);

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
              className="btn btn-outline rounded-pill w-100 text-start border"
              onClick={() => setShow(true)}
            >
              Inizia un post
            </button>
          </div>

          <div className="d-flex justify-content-between border-top pt-2">
            <button className="btn btn-light btn-sm d-flex align-items-center gap-1">
              <CameraVideoFill size={16} color="#378fe9" />
              <span className="small fw-semibold">Video</span>
            </button>
            <button className="btn btn-light btn-sm d-flex align-items-center gap-1">
              <ImageFill size={16} color="#5f9b41" />
              <span className="small fw-semibold">Foto</span>
            </button>
            <button className="btn btn-light btn-sm d-flex align-items-center gap-1">
              <PencilSquare size={16} color="#e06847" />
              <span className="small fw-semibold">Scrivi un articolo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modale */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="small fw-bold">Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-2 mb-3">
            {profilo?.image ? (
              <img
                src={profilo.image}
                alt="profilo"
                className="rounded-circle flex-shrink-0"
                width={40}
                height={40}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <PersonFill size={40} className="text-secondary flex-shrink-0" />
            )}
            <div>
              <p className="fw-bold mb-0 small">
                {profilo?.name} {profilo?.surname}
              </p>
            </div>
          </div>
          <textarea
            className="form-control border-0"
            rows={5}
            placeholder="Di cosa vuoi parlare?"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="rounded-pill"
            onClick={() => setShow(false)}
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreatePost;
