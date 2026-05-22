import { useMemo } from "react";
import { Image } from "react-bootstrap";
import { Plus, Check } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  salvaFollowedJobAction,
  showHideJobModal,
  visualizedJob,
} from "../../../redux/actions";

const InterestsCard = ({ job }) => {
  const dispatch = useDispatch();
  const profiles = useSelector((rs) => rs.profilo.usersData);

  // Recuperiamo i lavori seguiti per capire se lo abbiamo già cliccato
  const followedJobs = useSelector((state) => state.jobs.followedJobs);
  const isAlreadyFollowed = (followedJobs || []).some(
    (savedJob) => savedJob._id === job._id,
  );

  const randomProfile = useMemo(() => {
    const randomIndex = Math.floor(
      // eslint-disable-next-line react-hooks/purity
      Math.random() * ((profiles || []).length + 1),
    );
    return profiles[randomIndex];
  }, [profiles]);

  // Funzione del click
  const handleSeguiClick = () => {
    if (!isAlreadyFollowed) {
      dispatch(salvaFollowedJobAction(job));
    }
  };

  return (
    <div
      className="d-flex justify-content-start align-items-start border-bottom border-1 border-tertiary pt-3 mb-2 text-break"
      onClick={() => {
        dispatch(visualizedJob(job));
        dispatch(showHideJobModal(true));
      }}
    >
      <Image
        src={job.company_logo_url}
        onError={(e) => {
          e.target.src =
            "https://pixabay.com/it/illustrations/valigetta-icona-attivit%c3%a0-commerciale-2558671/";
        }}
        rounded
        width={"40px"}
        height={"40px"}
        className="me-2"
      />

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
              src={randomProfile?.image}
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
            {randomProfile?.name} e altri 123 seguono questa pagina.
          </p>
        </div>

        {/* Bottone Segui */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSeguiClick();
          }}
          disabled={isAlreadyFollowed}
          className="visualizza-btn rounded-pill px-2 py-1 d-flex align-items-center"
          style={{ opacity: isAlreadyFollowed ? 0.6 : 1 }} // cambio effetto bottone più sbiadito
        >
          {isAlreadyFollowed ? <Check /> : <Plus />}
          <span className="ms-1">
            {isAlreadyFollowed ? "Seguito" : "Segui"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default InterestsCard;
