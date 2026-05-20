import { NavDropdown } from "react-bootstrap"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { GeoAlt } from "react-bootstrap-icons"

const JobsLinkCard = (props) => {
  const {
    company_name,
    title,
    candidate_required_location,
    salary,
    job_type,
    description,
    url,
  } = props.job
  const { resetSearch } = props
  const [show, setShow] = useState(false)
  return (
    <>
      <NavDropdown.Item
        as={"div"}
        className="d-flex align-items-center my-1 text-decoration-none"
        onClick={() => {
          resetSearch("")
          setShow(true)
        }}
      >
        {/* <Image
            src={image}
            onError={(e) => {
              e.target.src =
                "https://pixabay.com/it/illustrations/valigetta-icona-attivit%c3%a0-commerciale-2558671/"
            }}
            roundedCircle
            width={"40px"}
            height={"40px"}
            className="me-2"
          /> */}
        <h6
          className="text-nowrap fw-bold mb-0 text-black"
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        >
          {company_name}
        </h6>
        {title ? (
          <>
            <small className="text-muted mx-2">•</small>
            <small className="text-muted text-truncate">{title}</small>
          </>
        ) : null}
      </NavDropdown.Item>
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 className="fw-bold mb-0">{title}</h6>
            <p className="small text-muted mb-0">{company_name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <div className="d-flex gap-3 mb-3">
            <GeoAlt size={14} className="text-muted mt-1" />
            <span className="small">{candidate_required_location}</span>
          </div>
          {salary && (
            <p className="small">
              <strong>Stipendio:</strong> {salary}
            </p>
          )}
          {job_type && (
            <p className="small">
              <strong>Contratto:</strong> {job_type}
            </p>
          )}
          <hr />
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Modal.Body>
        <Modal.Footer>
          <a href={url} target="_blank" rel="noreferrer">
            <Button variant="primary" className="rounded-pill">
              Candidati ora
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default JobsLinkCard
