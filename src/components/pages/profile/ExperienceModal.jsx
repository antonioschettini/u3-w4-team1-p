import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { postNewExperience } from "../../../redux/actions";

const ExperienceModal = (props) => {
  const userId = useSelector((rs) => rs.profilo.mioProfilo?._id);
  const [isOn, setIsOn] = useState(false);
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [company, setCompany] = useState("");
  const [isCurrentJob, setIsCurrentJob] = useState(false);
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [image, setImage] = useState(null);
  const currYear = new Date().getFullYear();
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
  const years = [];
  const monthIndex = months.indexOf(startMonth) + 1;
  const monthPadded = String(monthIndex).padStart(2, "0");

  const startDate = `${startYear}-${monthPadded}-01`;

  const endDate = isCurrentJob
    ? null
    : `${endYear}-${String(months.indexOf(endMonth) + 1).padStart(2, "0")}-01`;

  for (let i = 1990; i <= currYear; i++) {
    years.push(i);
  }
  const searchMethods = [
    "Linkedin",
    "Sito web dell'azienda",
    "Indeed",
    "Altri siti di offerte di lavoro",
    "Segnalazione",
    "Contattati dal recruiter",
    "Agenzia di selezione del personale",
    "Altro",
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
        <Form
          id="experience-form"
          onSubmit={(e) => {
            console.log(userId);
            e.preventDefault();
            if (!userId) {
              return;
            } else {
              postNewExperience(
                {
                  role: title,
                  company: company,
                  description: description,
                  area: area,
                  startDate: startDate,
                  endDate: endDate,
                  image: image,
                },
                userId,
              );
              props.onHide;
            }
          }}
        >
          <section>
            <p className="mb-0">Titolo*</p>
            <Form.Control
              className="border-black px-2 py-1 shadow-none"
              type="text"
              id="title"
              placeholder="Esempio: Retail Salses Manager"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </section>
          <section className="mt-4">
            <p className="mb-0">Tipo di impiego</p>
            <select
              className="border-black w-100 rounded-2 p-1 text-secondary"
              id="job-type"
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
          </section>
          <section className="mt-4">
            <p className="mb-0 mt-4">Azienda o organizzazione*</p>
            <Form.Control
              className="border-black px-2 py-1 shadow-none"
              type="text"
              id="company"
              placeholder="Esempio: Microsoft"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </section>
          <div id="check-container" className="d-flex mt-4">
            <Form.Check
              type="checkbox"
              className="me-2"
              checked={isCurrentJob}
              onChange={(e) => setIsCurrentJob(e.target.checked)}
            />
            <p className="fw-semibold">Attualmente ricopro questo ruolo</p>
          </div>
          {/* DATA DI INIZIO */}
          <section className="mt-4">
            <p className="mb-0 mt-3">Data di inizio</p>
            <div className="d-flex gap-2">
              <div className="flex-column w-50">
                <p className="text-secondary mb-0">Mese</p>
                <select
                  className="border-black w-100 rounded-2 p-1 text-secondary"
                  id="start-month"
                  onChange={(e) => setStartMonth(e.target.value)}
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
                  onChange={(e) => setStartYear(e.target.value)}
                >
                  <option>Year</option>
                  {years.map((year) => (
                    <option>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            {!isCurrentJob && (
              <>
                <p className="mb-0 mt-4">Data di fine</p>
                <div className="d-flex gap-2">
                  <div className="flex-column w-50">
                    <p className="text-secondary mb-0">Mese</p>
                    <select
                      className="border-black w-100 rounded-2 p-1 text-secondary"
                      id="end-month"
                      onChange={(e) => setEndMonth(e.target.value)}
                    >
                      <option>Month</option>
                      {months.map((month) => (
                        <option key={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-column w-50">
                    <p className="text-secondary mb-0">Anno</p>
                    <select
                      className="border-black w-100 rounded-2 p-1 text-secondary"
                      id="end-year"
                      onChange={(e) => setEndYear(e.target.value)}
                    >
                      <option>Year</option>
                      {years.map((year) => (
                        <option key={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}
          </section>
          <section className="mt-4">
            <p className="mb-0 mt-4">Località*</p>
            <Form.Control
              className="border-black px-2 py-1 shadow-none"
              type="text"
              id="area"
              placeholder="Esempio: Milano, Italia"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </section>
          <section className="mt-4">
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
          </section>
          <section className="mt-4">
            <p className="mb-0">Descrizione</p>
            <Form.Control
              className="border-black px-2 py-1 shadow-none"
              as="textarea"
              rows={3}
              id="description"
              max={2000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p
              className="text-end text-secondary mb-0"
              style={{ fontSize: "0.8rem" }}
            >
              {description.length}/2000
            </p>
          </section>
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="premium-chip-v2-small"
              aria-hidden="true"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              data-token-id="674"
              width="16"
              height="16"
              className="_3edc2961 _79b47a75 _4cecf8c6"
              role="img"
              aria-label=""
              style={{
                width: "16px",
                minWidth: "16px",
                height: "16px",
                minHeight: "16px",
              }}
            >
              <path
                fill="#e7a33e"
                d="M13.34 13.34c.42-.42.66-.99.66-1.59v-7.5C14 3.01 12.99 2 11.75 2h-7.5c-.6 0-1.17.24-1.59.66z"
              ></path>
              <path
                fill="#c37d16"
                d="M2.66 2.66c-.42.42-.66.99-.66 1.59v7.5C2 12.99 3.01 14 4.25 14h7.5c.6 0 1.17-.24 1.59-.66z"
              ></path>
            </svg>
            <p className="text-secondary mb-0 ms-2">
              <a href="#" className="text-decoration-none fw-semibold">
                Ottieni i suggerimenti dell’IA
              </a>{" "}
              con Premium
            </p>
          </div>
          <section className="mt-4">
            <p className="mb-0">Sommario del profilo</p>
            <Form.Control
              className="border-black px-2 py-1 shadow-none"
              type="text"
              id="summary"
              placeholder="Esempio: Software Enginneer"
              onChange={(e) => {
                setSummary(e.target.value);
              }}
            />
            <div className="d-flex justify-content-between">
              <p className="m-0 text-secondary" style={{ fontSize: "0.8rem" }}>
                Compare sotto il tuo nome nella parte superiore del profilo.
              </p>
              <p
                className="text-end text-secondary mb-0"
                style={{ fontSize: "0.8rem" }}
              >
                {summary.length}/220
              </p>
            </div>
          </section>
          <section className="mt-4">
            <p className="mb-0">Dove hai trovato l’offerta di lavoro?</p>
            <select
              className="border-black w-100 rounded-2 p-1 text-secondary"
              id="title"
            >
              <option>Seleziona</option>
              {searchMethods.map((method) => (
                <option key={method}>{method}</option>
              ))}
            </select>
            <p className="m-0 text-secondary" style={{ fontSize: "0.8rem" }}>
              Queste informazioni verranno usate per migliorare la ricerca di
              lavoro su LinkedIn.
            </p>
          </section>
          <section className="mt-4 d-flex flex-column">
            <p className="fw-semibold fs-5 mb-1">Competenze</p>
            <p className="m-0" style={{ fontSize: "0.9rem" }}>
              Ti consigliamo di aggiungere le 5 competenze più utilizzate in
              questo ruolo. Appariranno anche nella sezione Competenze.
            </p>
            <button className="modal-btn rounded-pill px-2 py-1 d-flex align-items-center mt-3">
              <Plus />
              <span className="ms-1">Aggiungi competenza</span>
            </button>
          </section>
          <section className="mt-4 d-flex flex-column">
            <p className="fw-semibold fs-5 mb-1">Contenuti multimediali</p>
            <p className="m-0" style={{ fontSize: "0.9rem" }}>
              Aggiungi contenuti multimediali come immagini, documenti, siti o
              presentazioni (fino a 50). Scopri di più sui{" "}
              <a className="fw-semibold text-decoration-none">
                tipi di file multimediali supportati
              </a>
            </p>
            <label className="modal-btn rounded-pill px-2 py-1 d-flex align-items-center mt-3">
              <Plus />
              <span className="ms-1">Aggiungi contenuto multimediale</span>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </section>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          form="experience-form"
          className="rounded-pill"
          variant="primary"
          type="submit"
        >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
