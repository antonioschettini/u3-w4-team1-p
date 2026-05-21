import { Modal, Button } from "react-bootstrap";

function PremiumModal({ isOpen, onClose }) {
  return (
    <Modal
      show={isOpen} // Dice al modale se mostrarsi o no
      onHide={onClose} // Chiude automaticamente se premi la X o fuori dal riquadro
      centered // Mette il modale perfettamente al centro dello schermo
    >
      <Modal.Body className="p-4 text-center position-relative">
        {/* Pulsante X per chiudere */}
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
        ></button>

        <h3 className="fw-bold mb-4 mt-2">
          Antonio, metti il turbo alla tua carriera
        </h3>

        {/* Lista dei vantaggi */}
        <ul
          className="list-unstyled text-start mx-auto mb-4"
          style={{ maxWidth: "320px" }}
        >
          <li className="mb-3">
            ✔️ <strong>Contatta chiunque</strong> con i messaggi InMail
          </li>
          <li className="mb-3">
            ✔️ <strong>Ottieni 11 volte più</strong> visualizzazioni del profilo
          </li>
          <li className="mb-3">
            ✔️ <strong>Accedi a informazioni</strong> esclusive sulle aziende
          </li>
          <li className="mb-3">
            ✔️ <strong>Partecipa a conversazioni</strong> live con leader di
            settore
          </li>
        </ul>

        {/* Pulsante Giallo usando */}
        <Button
          variant="warning"
          className="rounded-pill fw-bold py-2 px-4 mb-3 w-100"
          style={{ backgroundColor: "#fcd34d", border: "none", color: "#000" }}
        >
          Prova 1 mese di Premium per 0 €
        </Button>

        <p className="text-muted small px-2">
          Prova gratuita di 1 mese. Facile da annullare. Ti invieremo un
          promemoria 7 giorni prima della fine del periodo di prova.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default PremiumModal;
