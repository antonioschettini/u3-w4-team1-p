import { useState } from "react"
import { useSelector } from "react-redux"
import {
  PersonFill,
  CameraVideoFill,
  ImageFill,
  PencilSquare,
} from "react-bootstrap-icons"
import CreatePostModal from "./CreatePostModal"

function CreatePost() {
  const profilo = useSelector((state) => state.profilo.mioProfilo)

  const [showCardModal, setShowCardModal] = useState(false)

  const apriModal = () => setShowCardModal(true)
  const chiudiModal = () => setShowCardModal(false)

  return (
    <div style={{ maxWidth: 800 }} className="d-none d-sm-block">
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
              onClick={apriModal}
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
      <CreatePostModal show={showCardModal} onClose={chiudiModal} />
    </div>
  )
}

export default CreatePost
