import { Plus } from "react-bootstrap-icons";

const InterestsCard = () => {
  return (
    <div className="d-flex justify-content-start align-items-start border-bottom border-1 border-tertiary pt-3 mb-2">
      <div
        className="rounded-2 me-2 overflow-hidden flex-shrink-0"
        style={{ width: "50px", height: "50px" }}
      >
        <img
          src="https://placecats.com/300/300"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      <div className="d-flex flex-column mb-3">
        <p className="fw-semibold m-0">Poste italiane</p>
        <p className="m-0" style={{ fontSize: "0.8rem" }}>
          Spedizioni, trasporti e stoccaggio
        </p>
        <div className="d-flex justify-content-center align-items-center pt-3 mb-2">
          <div
            className="rounded-circle me-2 overflow-hidden flex-shrink-0"
            style={{ width: "25px", height: "25px" }}
          >
            <img
              src="https://placecats.com/300/300"
              alt=""
              className="w-100 h-100 object-fit-cover d-block"
              style={{ objectPosition: "center" }}
            />
          </div>

          <p className="m-0" style={{ fontSize: "0.7rem" }}>
            Carlotta e altri 123 seguono questa pagina.
          </p>
        </div>
        <button className="visualizza-btn rounded-pill px-2 py-1 d-flex align-items-center">
          <Plus />
          <span className="ms-1">Segui</span>
        </button>
      </div>
    </div>
  );
};

export default InterestsCard;
