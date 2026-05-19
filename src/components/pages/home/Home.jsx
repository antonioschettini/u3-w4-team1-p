import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import CreatePost from "./CreatePost";

function Home() {
  return (
    <Container style={{ maxWidth: 1200 }}>
      <Row className="mt-3 justify-content-center flex-nowrap gap-1">
        <LeftSidebar />
        <Col>
          <CreatePost />
        </Col>

        <RightSidebar />
      </Row>
    </Container>
  );
}

export default Home;
