import { useMemo } from "react";
import { Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const InterestsCard = ({ job }) => {
  const profiles = useSelector((rs) => rs.profilo.usersData);
  const randomProfile = useMemo(() => {
    // eslint-disable-next-line react-hooks/purity
    const randomIndex = Math.floor(Math.random() * (profiles.length + 1));
    return profiles[randomIndex];
  }, [profiles]);
  const iniziale = job.company_name
    ? job.company_name.charAt(0).toUpperCase()
    : "?";
  return (
    <div className="d-flex justify-content-start align-items-start border-bottom border-1 border-tertiary pt-3 mb-2 text-break">
      <div
        className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 fw-bold me-2"
        style={{
          width: 48,
          height: 48,
          background: "#98b1db",
          color: "#2c2d30",
          fontSize: 20,
        }}
      >
        {iniziale}
      </div>

      <div className="d-flex flex-column mb-3">
        <p className="fw-semibold m-0">{job.company_name}</p>
        <p className="m-0" style={{ fontSize: "0.8rem" }}>
          {job.title}
        </p>
        <div className="d-flex justify-content-center align-items-center pt-3 mb-2">
          <div
            className="rounded-circle me-2 overflow-hidden flex-shrink-0"
            style={{ width: "25px", height: "25px" }}
          >
            <img
              src={randomProfile.image}
              onError={(e) => {
                e.target.src =
                  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
              }}
              alt=""
              className="w-100 h-100 object-fit-cover d-block"
              style={{ objectPosition: "center" }}
            />
          </div>

          <p className="m-0" style={{ fontSize: "0.7rem" }}>
            {randomProfile.name} e altri 123 seguono questa pagina.
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
