import { Col } from "react-bootstrap";
import BlurredProfileCard from "./BlurredProfileCard";

const WhoVisited = () => {
  return (
    <Col
      xs={3}
      className="d-none d-sm-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3"
    >
      <div className="d-flex flex-column border-bottom border-1 border-tertiary">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0" style={{ fontSize: "0.8rem" }}>
            Altri profili consultati
          </p>
        </div>
        <p className="text-secondary" style={{ fontSize: "0.7rem" }}>
          Visibile solo a te
        </p>
      </div>
      <div className="d-flex flex-column pt-3">
        <BlurredProfileCard />
        <BlurredProfileCard />
        <BlurredProfileCard />
        <BlurredProfileCard />
      </div>
    </Col>
  );
};

export default WhoVisited;
