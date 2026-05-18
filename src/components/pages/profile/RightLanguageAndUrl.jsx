import { Pencil } from "react-bootstrap-icons";

const RightLanguageAndUrl = () => {
  return (
    <div className="d-none d-md-flex flex-column border border-1 border-secondary-subtle rounded-2 py-3 px-4 h-auto mb-2 bg-white shadow-sm">
      <div className="d-flex flex-column border-bottom border-1 border-tertiary">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0 fs-5">Lingua del profilo</p>
          <Pencil className="fs-5 pencil" />
        </div>
        <p className="text-secondary mt-2">Italiano</p>
      </div>
      <div className="d-flex flex-column pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold m-0 fs-5">Profilo Pubblico e URL</p>
          <Pencil className="fs-5 pencil" />
        </div>
        <p className="text-secondary mb-0 mt-2 text-break">
          www.linkedin.com/in/andrea-saderi-9b0aa5152
        </p>
      </div>
    </div>
  );
};

export default RightLanguageAndUrl;
