import BlurredProfileCard from "./BlurredProfileCard";

const WhoVisited = () => {
  return (
    <div className="d-none d-md-flex flex-column border border-1 border-secondary-subtle rounded-2 p-3 my-2 bg-white shadow-sm">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0">Altri profili consultati</p>
        </div>
        <p className="text-secondary mb-0">Visibile solo a te</p>
      </div>
      <div className="d-flex flex-column">
        <BlurredProfileCard />
        <BlurredProfileCard />
        <BlurredProfileCard />
        <BlurredProfileCard />
      </div>
    </div>
  );
};

export default WhoVisited;
