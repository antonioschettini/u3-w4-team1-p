import { Container, Row, Col } from "react-bootstrap"
import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar"
import CreatePost from "./CreatePost"
import PostsList from "./PostsList"

function Home() {
  return (
    <Container className="container-mw">
      <Row className="mt-3 justify-content-center flex-nowrap gap-1">
        <LeftSidebar />
        <Col>
          <CreatePost />
          <PostsList />
        </Col>

        <RightSidebar />
      </Row>
    </Container>
  )
}

export default Home
