import { useSelector } from "react-redux";
import BlurredProfileCard from "./BlurredProfileCard";
import { Spinner } from "react-bootstrap";
import { useMemo } from "react";

const WhoVisited = () => {
  const isLoading = useSelector((rs) => rs.profilo.loadingUsers);
  const profiles = useSelector((rs) => rs.profilo.usersData);
  const randomProfiles = useMemo(() => {
    if (!profiles?.length) return [];

    // eslint-disable-next-line react-hooks/purity
    const start = Math.floor(Math.random() * Math.max(1, profiles.length - 5));

    return profiles.slice(start, start + 5);
  }, [profiles]);
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
          randomProfiles // Aggiunto controllo sicurezza in caso di errore di server non è possibile mappare o slice di null
            .map((profile) => (
              <BlurredProfileCard key={profile._id} profile={profile} />
            ))
        )}
      </div>
    </div>
  );
};

export default WhoVisited;
