import PeopleCard from "./PeopleCard";

const PeopleYouMayKnow = () => {
  return (
    <div className="d-none d-sm-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3 my-2 bg-white">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Persone che potresti conoscere</p>
        </div>
        <p className="text-secondary mb-0">Della tua scuola o università</p>
      </div>
      <div className="d-flex flex-column">
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
