import { Container, Row } from "react-bootstrap";
import JobsLeftSidebar from "../jobs/JobsLeftSideBar";
import SmallFooter from "../../SmallFooter";
import { useSelector } from "react-redux";
import FollowedCard from "./FollowedCard";
import { useEffect } from "react";

const Network = () => {
  const loading = useSelector((state) => state.profilo.loadingUsers);
  const allFollowed = useSelector((rs) => rs.network.followed);

  useEffect(() => {
    console.log(allFollowed);
  }, [allFollowed]);

  return (
    <Container>
      <div className="d-flex gap-3 mt-3">
        <div
          className="d-none d-sm-block"
          style={{ width: 225, flexShrink: 0 }}
        >
          <JobsLeftSidebar />
          <SmallFooter />
        </div>

        <div style={{ flex: 1 }}>
          {loading && <p>Caricamento...</p>}

          <div className="card shadow-sm mb-3 p-2">
            <h6 className="fw-bold mb-1">La tua rete</h6>
            <Row className="card-body gap-3" xs={1} sm={2}>
              {allFollowed.map((profile) => (
                <FollowedCard key={profile._id} profile={profile} />
              ))}
              <p className="text-primary small" style={{ cursor: "pointer" }}>
                Mostra tutto →
              </p>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Network;
