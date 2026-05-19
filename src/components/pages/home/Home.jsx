import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function Home() {
  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12} md={3} className="d-none d-sm-block">
          <LeftSidebar />
        </Col>
        <Col xs={12} md={3} className="d-none d-lg-block">
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
