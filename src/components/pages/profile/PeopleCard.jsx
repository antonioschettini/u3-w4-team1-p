import { PersonPlusFill } from "react-bootstrap-icons";

const PeopleCard = () => {
  return (
    <div className="d-flex justify-content-start align-items-start border-top border-1 border-tertiary pt-3 mb-3">
      <div
        className="rounded-circle me-2 overflow-hidden flex-shrink-0"
        style={{ width: "50px", height: "50px" }}
      >
        <img
          src="https://placecats.com/300/300"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      <div className="d-flex flex-column">
        <p className="fw-semibold m-0">Gianni Giangiorgio · 2°</p>
        <p className="m-0" style={{ fontSize: "0.8rem" }}>
          Full Stack Developer
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
