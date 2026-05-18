import { ArrowRightShort } from "react-bootstrap-icons";
import PeopleCard from "./PeopleCard";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const PeopleYouMayKnow = () => {
  const isLoading = useSelector((rs) => rs.profilo.loadingUsers);
  const profiles = useSelector((rs) => rs.profilo.usersData);

  return (
    <div className="d-none d-md-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3 my-2 bg-white shadow-sm">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Persone che potresti conoscere</p>
        </div>
        <p className="text-secondary mb-0">Della tua scuola o università</p>
      </div>
      <div className="d-flex flex-column">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          profiles
            .slice(0, 5)
            .map((profile) => (
              <PeopleCard key={profile._id} profile={profile} />
            ))
        )}
      </div>
      <div className="text-center text-secondary-emphasis fw-semibold border-top border-tertiary border-1 pt-2">
        Mostra tutto <ArrowRightShort />
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
