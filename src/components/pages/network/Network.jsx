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

          <div className="card shadow-sm mb-3 p-4">
            <h4 className="fw-bold mb-1">La tua rete</h4>
            <Row className="g-2 mt-4" xs={1} sm={1} md={2} lg={3} xl={4}>
              {!allFollowed.length
                ? "Aggiungi qualcuno alla tua rete per visualizzarlo qui!"
                : allFollowed.map((profile) => (
                    <FollowedCard key={profile._id} profile={profile} />
                  ))}
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Network;
