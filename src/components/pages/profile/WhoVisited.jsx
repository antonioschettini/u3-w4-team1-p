import { Col } from "react-bootstrap";

const WhoVisited = () => {
  return (
    <Col
      xs={3}
      className="d-none d-sm-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3"
    >
      <div className="d-flex flex-column border-bottom border-1 border-tertiary">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Altri profili consultati</p>
        </div>
        <p className="text-secondary mt-2" style={{ fontSize: "0.8rem" }}>
          Visibile solo a te
        </p>
      </div>
      <div className="d-flex flex-column pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Profilo Pubblico e URL</p>
        </div>
        <p className="text-secondary mb-0 mt-2" style={{ fontSize: "0.8rem" }}>
          www.linkedin.com/in/andrea-saderi-9b0aa5152
        </p>
      </div>
    </Col>
  );
};

export default WhoVisited;
