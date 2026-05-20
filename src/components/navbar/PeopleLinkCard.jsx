import { Link } from "react-router";
import { Image, NavDropdown } from "react-bootstrap";

const PeolpleLinkCard = (props) => {
  const { image, name, surname, title, _id } = props.profile;
  const { resetSearch } = props;
  return (
    <>
      <NavDropdown.Item as={"div"} className="m-0 p-0">
        <Link
          className="d-flex align-items-center my-1 text-decoration-none"
          to={
            _id === "6a0afbe906bbe90015dee589" ? "/profile" : `/profile/${_id}`
          }
          onClick={() => resetSearch("")}
        >
          <Image
            src={image}
            roundedCircle
            width={"40px"}
            height={"40px"}
            className="me-2"
          />
          <h6
            className="text-nowrap fw-bold mb-0 text-black"
            style={{ textOverflow: "ellipsis", overflow: "hidden" }}
          >
            {name} {surname}
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
  );
};
export default PeolpleLinkCard;
