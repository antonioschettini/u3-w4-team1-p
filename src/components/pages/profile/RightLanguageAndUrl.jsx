import { Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const RightLanguageAndUrl = () => {
  return (
    <Col
      xs={3}
      className="d-none d-sm-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3 h-auto"
    >
      <div className="d-flex flex-column border-bottom border-1 border-tertiary">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Lingua del profilo</p>
          <Pencil style={{ color: "#404040" }} />
        </div>
        <p className="text-secondary mt-2" style={{ fontSize: "0.7rem" }}>
          Italiano
        </p>
      </div>
      <div className="d-flex flex-column pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Profilo Pubblico e URL</p>
          <Pencil style={{ color: "#404040" }} />
        </div>
        <p className="text-secondary mb-0 mt-2" style={{ fontSize: "0.7rem" }}>
          www.linkedin.com/in/andrea-saderi-9b0aa5152
        </p>
      </div>
    </Col>
  );
};

export default RightLanguageAndUrl;
