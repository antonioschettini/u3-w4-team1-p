import { Briefcase } from "react-bootstrap-icons";

function OtherEsperienzaCard({ experiences }) {
  if (!experiences.length) {
    return;
  }
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        {/* Intestazione card */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="card-title mb-0">Esperienze</h5>
        </div>

        {/* Lista delle esperienze */}
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="d-flex gap-3 align-items-start border-bottom pb-3 mb-3"
          >
            {/* Icona valigietta */}
            <Briefcase
              size={36}
              color="#1d4ed8"
              className="p-2 bg-light rounded"
            />

            {/* Contenuto principale */}
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="fw-bold mb-0 text-dark">{exp.role}</p>
                  <p className="mb-0 text-secondary small">{exp.company}</p>
                  <p className="text-muted tiny mb-0">
                    {exp.startDate ? exp.startDate.substring(0, 4) : ""} -{" "}
                    {exp.endDate ? exp.endDate.substring(0, 4) : "Presente"}
                  </p>
                  <p className="text-muted tiny mb-1">{exp.area}</p>
                </div>
              </div>

              {/* Descrizione */}
              <p className="small mb-0 mt-2 text-secondary">
                {exp.description}
              </p>

              {/* Spazio per l'immagine */}
              {exp.image && (
                <div className="mt-3">
                  <img
                    src={exp.image}
                    alt="Allegato esperienza"
                    className="img-fluid rounded border"
                    style={{
                      maxHeight: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherEsperienzaCard;
