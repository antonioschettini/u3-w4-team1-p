import {
  BellFill,
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  PlusSquareFill,
} from "react-bootstrap-icons"
import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router"

function MobileNavbarBottom() {
  return (
    <Navbar expand="lg" className="bg-white pb-1 pt-2 shadow-lg">
      <Container fluid className=" p-0">
        <div className="d-flex w-100 justify-content-between align-items-end">
          <Link
            className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
            to="/"
          >
            <HouseDoorFill className="nav-link-color-e" size={24} />
            <small className="text-truncate nav-link-color-e w-100">Home</small>
          </Link>

          <Link
            className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
            to="/"
          >
            <PeopleFill className="nav-link-color-e" size={24} />
            <small className="text-truncate nav-link-color-e w-100">
              La mia rete
            </small>
          </Link>

          <Link
            className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
            to="/"
          >
            <PlusSquareFill className="nav-link-color-e" size={20} />
            <small className="text-truncate nav-link-color-e w-100">
              Pubblica
            </small>
          </Link>

          <Link
            className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
            to="/"
          >
            <BellFill className="nav-link-color-e" size={24} />
            <small className="text-truncate nav-link-color-e w-100">
              Notifiche
            </small>
          </Link>

          <Link
            className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
            to="/jobs"
          >
            <BriefcaseFill className="nav-link-color-e" size={24} />
            <small className="text-truncate nav-link-color-e w-100">
              Lavoro
            </small>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default MobileNavbarBottom
