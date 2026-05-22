import {
  PlusCircle,
  Pencil,
  ChatLeftTextFill,
  PersonFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import CreatePostModal from "../home/CreatePostModal";
import { useState } from "react";

function Attività() {
  const followed = useSelector((state) => state.network.followed) || [];
  const posts = useSelector((state) => state.profilo.listaPost) || [];
  const mioProfilo = useSelector((state) => state.profilo.mioProfilo);
  const [showModal, setShowModal] = useState(false);

  const meiPost = posts.filter(
    (post) => post.username === mioProfilo?.username,
  );

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title mb-0">Attività</h5>
            <span className="text-primary small">
              {followed.length} Follower
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-primary btn-sm rounded-pill"
              onClick={() => setShowModal(true)}
            >
              <PlusCircle size={13} className="me-1" />
              Crea un post
            </button>
            <Pencil className="text-black" />
          </div>
        </div>

        {meiPost.length === 0 ? (
          <div className="text-center py-4">
            <ChatLeftTextFill size={30} className="text-secondary mb-2" />
            <p className="fw-semibold small mb-1">
              Non hai ancora pubblicato nulla
            </p>
            <p className="text-muted small mb-0">
              I post che condividi appariranno qui
            </p>
          </div>
        ) : (
          <div className="mt-3">
            {meiPost.slice(0, 3).map((post) => (
              <div key={post._id} className="d-flex gap-2 py-2 border-bottom">
                {mioProfilo?.image ? (
                  <img
                    src={mioProfilo.image}
                    alt="profilo"
                    className="rounded-circle flex-shrink-0"
                    width={40}
                    height={40}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <PersonFill
                    size={40}
                    className="text-secondary flex-shrink-0"
                  />
                )}
                <div>
                  <p className="small fw-semibold mb-0">
                    {mioProfilo?.name} {mioProfilo?.surname}
                  </p>
                  <p
                    className="small text-muted mb-0 text-truncate"
                    style={{ maxWidth: 250 }}
                  >
                    {post.text}
                  </p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="post"
                      className="mt-1 rounded-2"
                      style={{ maxHeight: 80, objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border-top pt-2 mt-2">
          <button className="btn btn-link btn-sm p-0 text-decoration-none">
            Mostra tutto
          </button>
        </div>
      </div>
      <CreatePostModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Attività;
