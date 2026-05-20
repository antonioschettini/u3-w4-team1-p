import { Link } from "react-router"
import { Image, NavDropdown } from "react-bootstrap"

const JobsLinkCard = (props) => {
  const { image, name, title, _id } = props.job
  const { resetSearch } = props
  return (
    <>
      <NavDropdown.Item as={"div"} className="p-0 mb-2">
        <Link
          className="d-flex align-items-center my-1 text-decoration-none"
          to={_id === "6a0afbe906bbe90015dee589" ? "/lavoro" : `/lavoro/${_id}`}
          onClick={() => resetSearch("")}
        >
          <Image
            src={image}
            onError={(e) => {
              e.target.src =
                "https://pixabay.com/it/illustrations/valigetta-icona-attivit%c3%a0-commerciale-2558671/"
            }}
            roundedCircle
            width={"40px"}
            height={"40px"}
            className="me-2"
          />
          <h6
            className="text-nowrap fw-bold mb-0 text-black"
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {name}
          </h6>
          {title ? (
            <>
              <small className="text-muted mx-2">•</small>
              <small className="text-muted text-truncate">{title}</small>
            </>
          ) : null}
        </Link>
      </NavDropdown.Item>
    </>
  )
}
export default JobsLinkCard
