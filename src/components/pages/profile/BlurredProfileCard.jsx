const BlurredProfileCard = () => {
  return (
    <div className="d-flex justify-content-between align-items-start border-bottom border-1 border-tertiary pb-3 mb-3">
      <div
        className="rounded-circle me-2 overflow-hidden flex-shrink-0"
        style={{ width: "35px", height: "35px" }}
      >
        <img
          src="https://placecats.com/300/300"
          alt=""
          className="blurred w-100 h-100 object-fit-cover"
        />
      </div>

      <div className="d-flex flex-column">
        <p className="fw-semibold m-0" style={{ fontSize: "0.8rem" }}>
          Qualcuno presso stoca automatics...
        </p>
        <button className="visualizza-btn rounded-pill p-0 p-1 mt-1">
          Visualizza
        </button>
      </div>
    </div>
  );
};

export default BlurredProfileCard;
