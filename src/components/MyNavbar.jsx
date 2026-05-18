import {
  BellFill,
  BriefcaseFill,
  CaretDownFill,
  ChatDotsFill,
  HouseDoorFill,
  Linkedin,
  PeopleFill,
  Search,
} from "react-bootstrap-icons"
import {
  Form,
  Container,
  Navbar,
  NavDropdown,
  InputGroup,
  Image,
  Button,
} from "react-bootstrap"
import { Link } from "react-router"
import { useState } from "react"

function MyNavbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const visibilityClass = isSearchFocused ? "d-md-none" : "d-md-block"

  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid className="d-flex flex-nowrap container-mw">
        <Navbar.Brand href="#home">
          <Linkedin color="#0A66C2" size={35} />
        </Navbar.Brand>
        <Form className="me-auto focus-input w-100">
          <InputGroup className="d-flex flex-nowrap focus-input-width">
            <InputGroup.Text
              id="basic-addon1"
              className=" rounded-start-pill border-end-0 focus-input-text"
            >
              <Search size={16} className="icona-bold" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Cerca"
              className=" rounded-end-pill border-start-0 shadow-none ps-0 focus-input-control"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </InputGroup>
        </Form>
        <div className="d-flex gap-2 justify-content-between w-100 ms-3">
          <Link
            className=" nav-link nav-link-color d-flex flex-column align-items-center justify-content-center"
            to="/"
          >
            <HouseDoorFill className="nav-link-color-e" size={24} />
            <small
              className={`search-d-none text-truncate nav-link-color-e d-none ${visibilityClass}`}
            >
              Home
            </small>
          </Link>
          <Link
            className=" nav-link nav-link-color d-flex flex-column align-items-center justify-content-center"
            to="/"
          >
            <PeopleFill className="nav-link-color-e" size={24} />
            <small
              className={`search-d-none text-truncate nav-link-color-e d-none ${visibilityClass}`}
            >
              La mia rete
            </small>
          </Link>
          <Link
            className=" nav-link nav-link-color d-flex flex-column align-items-center justify-content-center"
            to="/"
          >
            <BriefcaseFill className="nav-link-color-e" size={24} />
            <small
              className={`search-d-none text-truncate nav-link-color-e d-none ${visibilityClass}`}
            >
              Lavoro
            </small>
          </Link>
          <Link
            className=" nav-link nav-link-color d-flex flex-column align-items-center justify-content-center"
            to="/"
          >
            <ChatDotsFill className="nav-link-color-e" size={24} />
            <small
              className={`search-d-none text-truncate nav-link-color-e d-none ${visibilityClass}`}
            >
              Messaggistica
            </small>
          </Link>
          <Link
            className=" nav-link nav-link-color d-flex flex-column align-items-center justify-content-center"
            to="/"
          >
            <BellFill className="nav-link-color-e" size={24} />
            <small
              className={`search-d-none text-truncate nav-link-color-e d-none ${visibilityClass}`}
            >
              Notifiche
            </small>
          </Link>
          <div className=" nav-link nav-link-color d-flex flex-column align-items-center justify-content-center">
            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center nav-link-color-e">
                  <Image
                    src="1772550840745.jpeg"
                    roundedCircle
                    width={"24px"}
                    height={"24px"}
                  />
                  <small
                    className={`search-d-none text-truncate nav-link-color-e d-none ${visibilityClass}`}
                  >
                    Tu <CaretDownFill />
                  </small>
                </div>
              }
              className="d-flex flex-column no-caret nav-dropdown-profilo"
              align="end"
              dropdownMenuClassName="shadow-lg border-0 p-3"
            >
              <div
                className="d-flex align-items-center mb-2"
                style={{ width: "280px" }}
              >
                <Image
                  src="1772550840745.jpeg"
                  roundedCircle
                  width={"40px"}
                  height={"40px"}
                  className="me-2"
                />
                <div className="d-flex flex-column ">
                  <h6 className="fw-bold mb-0">Antonio Formisano</h6>
                  <small className="text-muted">Developer</small>
                </div>
              </div>
              <div className="d-flex gap-2 mb-2">
                <Button
                  variant="outline-primary"
                  className="rounded-pill fw-semibold text-start"
                >
                  Visualizza Profilo
                </Button>
                <Button
                  variant="primary"
                  className="rounded-pill fw-semibold text-start"
                >
                  Verifica Ora
                </Button>
              </div>

              <NavDropdown.Divider />
              <div className="py-1">
                <h6 className="fw-bold text-dark small mb-2">Account</h6>
                <NavDropdown.Item className="text-secondary ps-0 py-1 small text-wrap">
                  🟨 1 mese di Premium per 0 €
                </NavDropdown.Item>
                <NavDropdown.Item className="text-secondary ps-0 py-1 small">
                  Impostazioni e privacy
                </NavDropdown.Item>
                <NavDropdown.Item className="text-secondary ps-0 py-1 small">
                  Guida
                </NavDropdown.Item>
                <NavDropdown.Item className="text-secondary ps-0 py-1 small">
                  Lingua
                </NavDropdown.Item>
              </div>

              <NavDropdown.Divider />

              <div className="py-1">
                <h6 className="fw-bold text-dark small mb-2">Gestisci</h6>
                <NavDropdown.Item className="text-secondary ps-0 py-1 small">
                  Post e attività
                </NavDropdown.Item>
                <NavDropdown.Item className="text-secondary ps-0 py-1 small text-wrap">
                  Account per la pubblicazione di offerte di lavoro
                </NavDropdown.Item>
              </div>

              <NavDropdown.Divider />

              <NavDropdown.Item className="text-secondary ps-0 py-1 small">
                Esci
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
