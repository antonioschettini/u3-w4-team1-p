import { Linkedin } from "react-bootstrap-icons";

function SmallFooter() {
  return (
    <div className="px-2" style={{ fontSize: 11 }}>
      <div className="d-flex align-items-center gap-1 mb-2">
        <Linkedin size={16} color="#0a66c2" />
        <span className="text-muted">LinkedIn Corporation © 2026</span>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-1">
        <a href="#" className="text-muted text-decoration-none">
          Informazioni
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Accessibilità
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Centro assistenza
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Privacy e condizioni
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Opzioni per gli annunci pubblicitari
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Pubblicità
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Servizi alle aziende
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Scarica l'app LinkedIn
        </a>
        <a href="#" className="text-muted text-decoration-none">
          Altro
        </a>
      </div>
    </div>
  );
}

export default SmallFooter;
