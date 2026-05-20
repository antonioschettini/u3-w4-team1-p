import { ArrowRightShort } from "react-bootstrap-icons";
import PeopleCard from "./PeopleCard";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { fetchSavedProfiles } from "../../../redux/actions";

const PeopleYouMayKnow = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((rs) => rs.profilo.loadingUsers);
  const profiles = useSelector((rs) => rs.profilo.usersData);

  useEffect(() => {
    dispatch(fetchSavedProfiles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          profiles &&
          profiles // Aggiunto controllo sicurezza in caso di errore di server non è possibile mappare o slice di null
            .slice(500, 505)
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
