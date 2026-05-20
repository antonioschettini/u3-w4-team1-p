import { PersonPlusFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

const PeopleCard = (props) => {
  const { image, name, surname, title, _id } = props.profile;
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-start align-items-start border-top border-1 border-tertiary pt-3 mb-3"
      onClick={() => {
        navigate(`/profile/${_id}`);
      }}
      style={{ cursor: "pointer" }}
    >
      <div
        className="rounded-circle me-2 overflow-hidden flex-shrink-0"
        style={{ width: "50px", height: "50px" }}
      >
        <img
          src={image}
          alt=""
          className="w-100 h-100 object-fit-cover"
          onError={(e) => {
            e.target.src =
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
          }}
        />
      </div>

      <div className="d-flex flex-column">
        <p className="fw-semibold m-0 text-capitalize">
          {name} {surname} · 2°
        </p>
        <p className="m-0" style={{ fontSize: "0.8rem" }}>
          {title}
        </p>
        <button className="visualizza-btn rounded-pill px-2 py-1 mt-1 d-flex align-items-center mt-3">
          <PersonPlusFill />
          <span className="ms-1">Aggiungi</span>
        </button>
      </div>
    </div>
  );
};
export default PeopleCard;
