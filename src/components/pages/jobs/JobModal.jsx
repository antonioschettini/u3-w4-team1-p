import { Button, Modal } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { showHideJobModal } from "../../../redux/actions";

const JobModal = (props) => {
  const dispatch = useDispatch();
  const job = props.job;
  if (!job) {
    return;
  }
  return (
    <Modal
      show={props.isShown}
      onHide={() => dispatch(showHideJobModal(false))}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title className="d-flex flex-row">
          <img
            src={job.company_logo_url}
            rounded
            width={48}
            height={48}
            className="me-3"
          />
          <div>
            <h6 className="fw-bold mb-0">{job.title}</h6>
            <p className="small text-muted mb-0">{job.company_name}</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
        <div className="d-flex gap-3 mb-3">
          <GeoAlt size={14} className="text-muted mt-1" />
          <span className="small">{job.candidate_required_location}</span>
        </div>
        {job.salary && (
          <p className="small">
            <strong>Stipendio:</strong> {job.salary}
          </p>
        )}
        {job.job_type && (
          <p className="small">
            <strong>Contratto:</strong> {job.job_type}
          </p>
        )}
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
  );
};

export default JobModal;
