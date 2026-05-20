import { GeoAltFill } from "react-bootstrap-icons";

function JobsCard({ job }) {
  const iniziale = job.company_name ? job.company_name.charAt(0).toUpperCase() : "?";

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">

        <div className="d-flex gap-3 align-items-start">
          <div
            className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 fw-bold"
            style={{ width: 48, height: 48, background: "#a7b2c7", color: "#1d4ed8", fontSize: 20 }}
          >
            {iniziale}
          </div>

          <div className="flex-grow-1">
            <h6 className="fw-bold mb-0 text-primary" style={{ cursor: "pointer" }}>
              {job.title}
            </h6>
            <p className="small mb-0">{job.company_name}</p>
            <div className="d-flex gap-2 align-items-center">
              <GeoAltFill size={12} className="text-muted" />
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
  );
}

export default JobsCard;