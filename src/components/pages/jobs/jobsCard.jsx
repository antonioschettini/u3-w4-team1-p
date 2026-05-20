import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";

function JobsCard({ job }) {
  const iniziale = job.company_name ? job.company_name.charAt(0).toUpperCase() : "?";
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Card cliccabile */}
      <div className="card shadow-sm mb-3" style={{ cursor: "pointer" }} onClick={() => setShow(true)}>
        <div className="card-body">
          <div className="d-flex gap-3 align-items-start">
            <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 fw-bold"
              style={{ width: 48, height: 48, background: "#98b1db", color: "#2c2d30", fontSize: 20 }}>
              {iniziale}
            </div>
            <div className="flex-grow-1">
              <h6 className="fw-bold mb-0 text-primary">{job.title}</h6>
              <p className="small mb-0">{job.company_name}</p>
              <div className="d-flex gap-2 align-items-center">
                <GeoAlt size={12} className="text-muted" />
                <p className="text-muted small mb-0">{job.candidate_required_location}</p>
              </div>
              {job.job_type && (
                <span className="badge bg-light text-dark border mt-1" style={{ fontSize: 11 }}>
                  {job.job_type}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modale */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 className="fw-bold mb-0">{job.title}</h6>
            <p className="small text-muted mb-0">{job.company_name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <div className="d-flex gap-3 mb-3">
            <GeoAlt size={14} className="text-muted mt-1" />
            <span className="small">{job.candidate_required_location}</span>
          </div>
          {job.salary && <p className="small"><strong>Stipendio:</strong> {job.salary}</p>}
          {job.job_type && <p className="small"><strong>Contratto:</strong> {job.job_type}</p>}
          <hr />
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </Modal.Body>
        <Modal.Footer>
          <a href={job.url} target="_blank" rel="noreferrer">
            <Button variant="primary" className="rounded-pill">
              Candidati ora
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JobsCard;