import { PlusCircle, Pencil, ChatLeftTextFill } from "react-bootstrap-icons";

function Attività() {
  return (
    <div className="card mb-3">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title mb-0">Attività</h5>
            <span className="text-primary small">10 followers</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-primary btn-sm rounded-pill">
              <PlusCircle size={13} className="me-1" />
              Crea un post
            </button>
            <Pencil className="text-black" />
          </div>
        </div>

        <div className="text-center py-4">
          <ChatLeftTextFill size={30} className="text-secondary mb-2" />
          <p className="fw-semibold small mb-1">Non hai ancora pubblicato nulla</p>
          <p className="text-muted small mb-0">I post che condividi appariranno qui</p>
        </div>

        <div className="border-top pt-2">
          <button className="btn btn-link btn-sm p-0 text-decoration-none">
            Mostra tutto 
          </button>
        </div>

      </div>
    </div>
  );
}

export default Attività;