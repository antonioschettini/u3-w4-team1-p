import { ChatDotsFill, GearFill, Search } from "react-bootstrap-icons"
import {
  Form,
  Container,
  Navbar,
  InputGroup,
  Image,
  Button,
  Offcanvas,
  NavDropdown,
  Spinner,
} from "react-bootstrap"
import { Link } from "react-router"
import { useSelector } from "react-redux"
import { useState } from "react"
import PeolpleLinkCard from "./PeopleLinkCard"

function MobileNavbarTop() {
  const profilo = useSelector((state) => state.profilo.mioProfilo)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const isLoading = useSelector((rs) => rs.profilo.loadingUsers)
  const profiles = useSelector((rs) => rs.profilo.usersData)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Navbar expand="lg" className="bg-white py-1">
      <Container fluid className="d-flex flex-nowrap container-mw">
        <Button className="bg-transparent border-0" onClick={handleShow}>
          <Image
            src={profilo?.image || "https://placehold.co/150"}
            roundedCircle
            width={"24px"}
            height={"24px"}
          />
        </Button>
        <Offcanvas show={show} onHide={handleClose} style={{ width: "70vw" }}>
          <Offcanvas.Header className=" border-bottom">
            <Offcanvas.Title>
              <Link
                to="/profile"
                className=" text-decoration-none"
                onClick={handleClose}
              >
                <Image
                  src={profilo?.image || "https://placehold.co/150"}
                  roundedCircle
                  width={"70px"}
                  height={"70px"}
                />{" "}
                <div className="d-flex flex-column mt-2">
                  <h4 className="fw-bold mb-0 text-black">
                    {profilo?.name} {profilo?.surname}
                  </h4>
                  <p className=" fw-normal text-black my-2 fs-6">
                    {profilo?.title}
                  </p>
                  <small className=" fw-normal text-muted mb-2 fs-6">
                    {profilo?.area}
                  </small>
                </div>
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <div className="p-3 border-bottom">
            <small className=" fw-normal text-muted">
              <span className="text-primary fw-bold">4</span> visitatori del
              profilo
            </small>
            <p className="fw-medium mt-2 mb-0">Visualizza tutte le analisi</p>
          </div>
          <div className="p-3 border-bottom h-100">
            <h4 className="fw-bold mb-4 mt-2">Giochi di logica</h4>
            <h4 className="fw-bold mb-4">Post salvati</h4>
            <h4 className="fw-bold mb-4">Gruppi</h4>
          </div>
          <div className="p-3 fw-bold d-flex align-items-center">
            <GearFill color="gray" className="me-1" /> Impostazioni
          </div>
        </Offcanvas>
        <NavDropdown
          title={
            <Form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === " ") {
                      e.stopPropagation()
                    }
                  }}
                />
              </InputGroup>
            </Form>
          }
          className="d-flex flex-column no-caret nav-dropdown-profilo me-auto focus-input w-100 navsearch"
          align="start"
        >
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : location.pathname === "/lavoro" ? (
            ""
          ) : (
            profiles &&
            profiles
              .filter((profile) => {
                if (!searchQuery) return true

                const query = searchQuery.toLowerCase().trim()
                const name = profile.name?.toLowerCase() || ""
                const surname = profile.surname?.toLowerCase() || ""

                const fullName = `${name} ${surname}`
                const reverseFullName = `${surname} ${name}`

                return (
                  fullName.includes(query) || reverseFullName.includes(query)
                )
              })
              .slice(0, 5)
              .map((profile) => (
                <PeolpleLinkCard
                  key={profile._id}
                  profile={profile}
                  resetSearch={setSearchQuery}
                />
              ))
          )}
        </NavDropdown>

        {/* <Form className="me-2 focus-input w-100">
          <InputGroup className="d-flex flex-nowrap">
            <InputGroup.Text
              id="basic-addon1"
              className=" rounded-start-pill border-end-0 focus-input-text"
            >
              <Search size={16} className="icona-bold" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Cerca"
              className=" rounded-end-pill border-start-0 shadow-none ps-0 focus-input-control"
            />
          </InputGroup>
        </Form> */}
        <Link
          className=" nav-link nav-link-color d-flex flex-column align-items-center justify-content-center"
          to="/"
        >
          <ChatDotsFill className="nav-link-color-e" size={24} />
        </Link>
      </Container>
    </Navbar>
  )
}

export default MobileNavbarTop
