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
          <span className="text-truncate m-0">Collegamenti</span>
          <span className="ms-auto">55</span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <PersonBadge className="me-2" width={22} />
          <span className="text-truncate m-0">
            Persone che segui e follower
          </span>
          <span className="ms-auto"></span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <PersonFill className="me-2" width={22} />
          <span className="text-truncate m-0">Gruppi</span>
          <span className="ms-auto">1</span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <Calendar3 className="me-2" width={22} />
          <span className="text-truncate m-0">Eventi</span>
          <span className="ms-auto"></span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <FileEarmark className="me-2" width={22} />
          <span className="text-truncate m-0">Pagine</span>
          <span className="ms-auto">25</span>
        </Card.Text>
        <Card.Text className="fs-5 p-1 fw-medium text-muted d-flex align-items-center">
          <Newspaper className="me-2" width={22} />
          <span className="text-truncate m-0">Newsletter</span>
          <span className="ms-auto">1</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NetworkSideBar
