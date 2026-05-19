import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ExperienceModal = (props) => {
  const [isOn, setIsOn] = useState(false);
  const currYear = new Date().getFullYear();
  const years = [];
  for (let i = 1990; i <= currYear; i++) {
    years.push(i);
  }
  const months = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ];

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      style={{ width: "100%" }}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title className="fw-semibold fs-5">
          Aggiungi esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "400px", overflowY: "scroll" }}>
        <div
          className="d-flex flex-column py-3 px-4"
          style={{ backgroundColor: "#edf3f8" }}
        >
          <p className="fw-semibold" style={{ fontSize: "0.9rem" }}>
            Informa la rete
          </p>
          <div className="d-flex align-items-center gap-2">
            <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
              Attiva l’opzione per informare la tua rete delle principali
              modifiche al profilo (ad esempio un nuovo lavoro) e degli
              anniversari lavorativi. Gli aggiornamenti possono richiedere fino
              a 2 ore. Scopri di più sulla{" "}
              <a href="#" className="text-decoration-none fw-semibold">
                condivisione delle modifiche del profilo
              </a>
              .
            </p>
            <div className="d-flex gap-2">
              <p>{isOn ? "On" : "Off"}</p>
              <Form.Switch
                onChange={(e) => setIsOn(e.target.checked)}
                checked={isOn}
              />
            </div>
          </div>
        </div>
        <p className="text-secondary my-4" style={{ fontSize: "0.8rem" }}>
          * Indica che è obbligatorio
        </p>
        <Form>
          <p className="mb-0">Titolo*</p>
          <Form.Control
            className="border-black px-2 py-1"
            type="text"
            id="title"
            placeholder="Esempio: Retail Salses Manager"
            required
          />
          <p className="mb-0 mt-4">Tipo di impiego</p>
          <select
            className="border-black w-100 rounded-2 p-1 text-secondary"
            id="title"
          >
            <option>Seleziona</option>
            <option>A tempo pieno</option>
            <option>Part time</option>
            <option>Lavoratore autonomo</option>
            <option>Freelance</option>
            <option>Contratto</option>
            <option>Tirocinio</option>
            <option>Apprendistato</option>
            <option>Stagionale</option>
          </select>
          <p className="mb-0 mt-4">Azienda o organizzazione*</p>
          <Form.Control
            className="border-black px-2 py-1"
            type="text"
            id="company"
            placeholder="Esempio: Microsoft"
            required
          />
          <div id="check-container" className="d-flex mt-4">
            <Form.Check type="checkbox" className="me-2" />
            <p className="fw-semibold">Attualmente ricopro questo ruolo</p>
          </div>
          {/* DATA DI INIZIO */}
          <p className="mb-0 mt-4">Data di inizio</p>
          <div className="d-flex gap-2">
            <div className="flex-column w-50">
              <p className="text-secondary mb-0">Mese</p>
              <select
                className="border-black w-100 rounded-2 p-1 text-secondary"
                id="start-month"
              >
                <option>Month</option>
                {months.map((month) => (
                  <option>{month}</option>
                ))}
              </select>
            </div>
            <div className="flex-column w-50">
              <p className="text-secondary mb-0">Anno</p>
              <select
                className="border-black w-100 rounded-2 p-1 text-secondary"
                id="start-year"
              >
                <option>Year</option>
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <p className="mb-0 mt-4">Località</p>
          <Form.Control
            className="border-black px-2 py-1"
            type="text"
            id="title"
            placeholder="Esempio: Milano, Italia"
          />
          <p className="mb-0 mt-4">Tipo di località</p>
          <select
            className="border-black w-100 rounded-2 p-1 text-secondary"
            id="title"
          >
            <option>Seleziona</option>
            <option>Ibrida</option>
            <option>Sul Posto</option>
            <option>Da remoto</option>
          </select>
          <p className="m-0 text-secondary" style={{ fontSize: "0.8rem" }}>
            Scegli un tipo di località (es. da remoto)
          </p>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="rounded-pill"
          variant="primary"
          onClick={props.onHide}
        >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
