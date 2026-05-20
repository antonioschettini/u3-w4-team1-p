import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../../redux/actions";
import { Container } from "react-bootstrap";
import JobsCard from "./jobsCard";
import SmallFooter from "../../SmallFooter";
import JobsLeftSidebar from "./JobsLeftSideBar";

function Jobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const principali = jobs.slice(0, 3);
  const altre = jobs.slice(3);

  return (
    <Container>
      <div className="d-flex gap-3 mt-3">
        <div className="d-none d-sm-block" style={{ width: 225, flexShrink: 0 }}>
          <JobsLeftSidebar />
          <SmallFooter />
        </div>

        <div style={{ flex: 1 }}>
          {loading && <p>Caricamento...</p>}

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Le principali offerte di lavoro per te</h6>
              <p className="text-muted small mb-3">In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi</p>
              {principali.map((job) => (
                <JobsCard key={job._id} job={job} />
              ))}
              <p className="text-primary small" style={{ cursor: "pointer" }}>Mostra tutto →</p>
            </div>
          </div>

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Altre offerte di lavoro per te</h6>
              <p className="text-muted small mb-3">In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi</p>
              {altre.map((job) => (
                <JobsCard key={job._id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Jobs;