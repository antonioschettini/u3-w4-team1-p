import { useSelector } from "react-redux";
import BlurredProfileCard from "./BlurredProfileCard";
import { Spinner } from "react-bootstrap";

const WhoVisited = () => {
  const isLoading = useSelector((rs) => rs.profilo.loadingUsers);
  const profiles = useSelector((rs) => rs.profilo.usersData);

  return (
    <div className="d-none d-md-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3 my-2 bg-white shadow-sm">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Altri profili consultati</p>
        </div>
        <p className="text-secondary mb-0">Visibile solo a te</p>
      </div>
      <div className="d-flex flex-column">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          profiles &&
          profiles
            .slice(0, 5)
            .map((profile) => (
              <BlurredProfileCard key={profile._id} profile={profile} />
            ))
        )}
      </div>
    </div>
  );
};

export default WhoVisited;
