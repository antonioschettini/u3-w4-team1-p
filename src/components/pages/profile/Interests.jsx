import { ArrowRightShort } from "react-bootstrap-icons";
import InterestsCard from "./InterestsCard";

const Interests = () => {
  return (
    <div className="d-none d-md-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3 my-2 bg-white shadow-sm">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Potrebbero interessarti</p>
        </div>
        <p className="text-secondary mb-0">Pagine per te</p>
      </div>
      <div className="d-flex flex-column">
        <InterestsCard />
        <InterestsCard />
      </div>
      <div className="text-center text-secondary-emphasis fw-semibold pt-2">
        Mostra tutto <ArrowRightShort />
      </div>
    </div>
  );
};

export default Interests;
