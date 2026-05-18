import {
  PersonFill,
  BarChartFill,
  Search,
  EyeFill,
} from "react-bootstrap-icons";

function StatCard({ value, label, hint }) {
  return (
    <div className="flex-fill p-3">
      <div className="fw-bold fs-5">{value}</div>
      <div className="small fw-semibold">{label}</div>
      <div className="text-muted small">{hint}</div>
    </div>
  );
}

function Analisi() {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Analisi</h5>
        <p className="text-muted small">
          <EyeFill size={14} className="me-1" />
          Visibile solo a te
        </p>

        <div className="d-flex border-top">
          <StatCard
            icon={<PersonFill size={20} className="text-secondary" />}
            value={1}
            label="visualizzazione del profilo"
            hint="Scopri chi ha visitato il tuo profilo."
          />

          <StatCard
            icon={<BarChartFill size={20} className="text-secondary" />}
            value={0}
            label="impressioni dei post"
            hint="Ultimi 7 giorni"
          />

          <StatCard
            icon={<Search size={20} className="text-secondary" />}
            value={0}
            label="comparse nelle ricerche"
            hint="Aggiorna il tuo profilo."
          />
        </div>

        <div className="border-top pt-2 mt-1">
          <button className="btn btn-link btn-sm p-0 text-decoration-none">
            Mostra tutto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analisi;
