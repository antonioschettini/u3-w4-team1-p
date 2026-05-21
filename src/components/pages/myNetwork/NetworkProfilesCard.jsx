import { Button, Card, Col, Image } from "react-bootstrap"
import { PersonPlusFill } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { followUser } from "../../../redux/actions"

const NetworkProfileCard = (props) => {
  const { image, name, surname, title } = props.profile
  // eslint-disable-next-line react-hooks/purity
  const randomCollegamenti = Math.floor(Math.random() * 97) + 4

  const dispatch = useDispatch()
  const followed = useSelector((rs) => rs.network.followed)
  const isFollowed = followed.some((user) => user._id === props.profile._id)

  return (
    <Col xs={6} sm={4} md={3}>
      <Card className="h-100 w-100">
        {/* Sfondo Copertina */}
        <Card.Img as="div" style={{ height: "64px" }} className="w-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="person-medium"
            viewBox="0 0 552 138"
            className="card-img-top h-100"
            role="img"
            aria-label="Foto di copertina"
            aria-hidden="false"
            preserveAspectRatio="xMidYMid slice"
          >
            <g>
              <path fill="none" d="M0 0h552v138H0z" />
              <path fill="#d9e5e7" d="M0 0h552v138H0z" />
              <path fill="#bfd3d6" d="M380 0h172v138H380z" />
              <path
                fill="#a0b4b7"
                d="M333.22 0H0v138h333.22a207.93 207.93 0 0 0 0-138"
              />
            </g>
          </svg>
        </Card.Img>

        {/* 1. CONTENITORE AD ALTEZZA ZERO: permette alla foto di fluttuare tra SVG e Body */}
        <div className="position-relative d-flex justify-content-center">
          <Image
            src={
              image
                ? image
                : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
            roundedCircle
            className="border border-white border-3 shadow-sm position-absolute object-fit-cover z-3"
            alt="Foto profilo"
            style={{
              top: "-36px",
            }}
            width={72}
            height={72}
          />
        </div>

        {/* Corpo della Card */}
        <Card.Body className="d-flex flex-column pt-5">
          {/* Informazioni profilo */}
          <div className="d-flex flex-column align-items-center justify-content-center mt-1">
            <h5 className="fw-bold m-0 text-center text-truncate w-100 fs-6">
              {name}
            </h5>
            <h5 className="fw-bold m-0 text-center text-truncate w-100 fs-6">
              {surname}
            </h5>
            <p className="small text-muted mt-1 mb-2 text-center">
              {title || "Nessuna qualifica inserita"}
            </p>
          </div>

          {/* Pulsanti e Collegamenti */}
          <div className="d-flex flex-column mt-auto">
            <p className="text-primary small fw-semibold mb-2 text-center">
              {randomCollegamenti} collegamenti
            </p>
            <Button
              className={
                isFollowed
                  ? "followed-btn rounded-pill d-flex align-items-center justify-content-center w-100"
                  : "visualizza-btn rounded-pill d-flex align-items-center justify-content-center w-100"
              }
              disabled={isFollowed}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(followUser(props.profile))
              }}
            >
              {!isFollowed && <PersonPlusFill />}
              <span className="ms-1">
                {isFollowed ? "Segui già" : "Aggiungi"}
              </span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default NetworkProfileCard
