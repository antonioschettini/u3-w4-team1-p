import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";

function Home() {
  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12} md={3} className="d-none d-sm-block">
          <LeftSidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
