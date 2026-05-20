import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import JobsCard from "./jobsCard";
import LeftSidebar from "../home/LeftSidebar";
import SmallFooter from "../../SmallFooter";

function Jobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const principali = jobs.slice(0, 4);
  const altre = jobs.slice(4);

  return (
    <Container>
      <Row className="mt-3 justify-content-center flex-nowrap gap-3">
        <div className="d-none d-sm-block">
          <LeftSidebar />
          <SmallFooter />
        </div>

        <Col>
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="fw-bold mb-1">
                Le principali offerte di lavoro per te
              </h6>
              <p className="text-muted small mb-3">
                In base al tuo profilo, alle tue preferenze e ad attività come
                candidature, ricerche e salvataggi
              </p>
              {principali.map((job) => (
                <JobsCard key={job._id} job={job} />
              ))}
              <p className="text-primary small" style={{ cursor: "pointer" }}>
                Mostra tutto →
              </p>
            </div>
          </div>

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Altre offerte di lavoro per te</h6>
              <p className="text-muted small mb-3">
                In base al tuo profilo, alle tue preferenze e ad attività come
                candidature, ricerche e salvataggi
              </p>
              {altre.map((job) => (
                <JobsCard key={job._id} job={job} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Jobs;