import { Container } from "react-bootstrap";
import JobsLeftSidebar from "../jobs/JobsLeftSideBar";
import SmallFooter from "../../SmallFooter";
import { useSelector } from "react-redux";
import FollowedCard from "./FollowedCard";

const Network = () => {
  const loading = useSelector((state) => state.profilo.loadingUsers);
  const allFollowed = [];

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

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6 className="fw-bold mb-1">La tua rete</h6>

              {allFollowed.map((profile) => (
                <FollowedCard key={profile._id} profile={profile} />
              ))}
              <p className="text-primary small" style={{ cursor: "pointer" }}>
                Mostra tutto →
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Network;
