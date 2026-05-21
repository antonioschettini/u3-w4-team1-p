import { Card } from "react-bootstrap"
import {
  Calendar3,
  FileEarmark,
  Newspaper,
  PeopleFill,
  PersonBadge,
  PersonFill,
} from "react-bootstrap-icons"

const NetworkSideBar = () => {
  return (
    <Card className="shadow-sm rounded-3 mt-4 mt-md-0 mb-4">
      <Card.Title className="p-4 border-bottom">
        Gestisci la tua rete
      </Card.Title>
      <Card.Body className="pt-0">
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <PeopleFill className="me-2" width={22} />
          <p className="text-truncate m-0">Collegamenti</p>
          <span className="ms-auto">55</span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <PersonBadge className="me-2" width={22} />
          <p className="text-truncate m-0">Persone che segui e follower</p>
          <span className="ms-auto"></span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <PersonFill className="me-2" width={22} />
          <p className="text-truncate m-0">Gruppi</p>
          <span className="ms-auto">1</span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <Calendar3 className="me-2" width={22} />
          <p className="text-truncate m-0">Eventi</p>
          <span className="ms-auto"></span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <FileEarmark className="me-2" width={22} />
          <p className="text-truncate m-0">Pagine</p>
          <span className="ms-auto">25</span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <Newspaper className="me-2" width={22} />
          <p className="text-truncate m-0">Newsletter</p>
          <span className="ms-auto">1</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NetworkSideBar
