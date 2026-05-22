import { useState, useEffect } from "react";
import { Image, Form, InputGroup, Button } from "react-bootstrap";
import {
  ChevronUp,
  ChevronDown,
  ThreeDots,
  PencilSquare,
  Search,
  ArrowLeft,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Messaggistica = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [contattoAttivo, setContattoAttivo] = useState(null);
  const [testo, setTesto] = useState("");
  const [storicoMessaggi, setStoricoMessaggi] = useState({});
  // conto di quale chat è stata toccata per ultima
  const [ordineCronologico, setOrdineCronologico] = useState([]);

  const profilo = useSelector((state) => state.profilo.mioProfilo);
  const contatti = useSelector((state) => state.network.followed) || [];

  useEffect(() => {
    const chatSalvate = localStorage.getItem("mieChat");
    if (chatSalvate) {
      setStoricoMessaggi(JSON.parse(chatSalvate));
    }
    // Carichiamo l'ordine cronologico salvato
    const ordineSalvato = localStorage.getItem("ordineChat");
    if (ordineSalvato) {
      setOrdineCronologico(JSON.parse(ordineSalvato));
    }
  }, [isOpen, contattoAttivo]);

  useEffect(() => {
    const gestisciTastoEsc = (evento) => {
      if (evento.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", gestisciTastoEsc);
    }
    return () => {
      window.removeEventListener("keydown", gestisciTastoEsc);
    };
  }, [isOpen]);

  // ordina mettendo in cima l'ultimissimo a cui hai scritto
  const contattiOrdinati = [...contatti].sort((a, b) => {
    const indiceA = ordineCronologico.indexOf(a._id);
    const indiceB = ordineCronologico.indexOf(b._id);

    // Logiche condizionali per la visualizzazione dei messaggi
    // Se entrambi hanno messaggi, chi è stato inserito prima in "ordineChat" va in cima
    if (indiceA !== -1 && indiceB !== -1) return indiceA - indiceB;
    // Se solo A ha messaggi, va in cima
    if (indiceA !== -1) return -1;
    // Se solo B ha messaggi, va in cima
    if (indiceB !== -1) return 1;
    // Se nessuno dei due ha messaggi, restano fermi
    return 0;
  });

  const inviaMessaggio = (e) => {
    e.preventDefault();
    if (testo.trim() === "" || !contattoAttivo) return;

    const idAmico = contattoAttivo._id;
    const chatVecchia = storicoMessaggi[idAmico] || [];

    const nuoviMessaggi = {
      ...storicoMessaggi,
      [idAmico]: [...chatVecchia, testo],
    };

    // Mette l'id di questo amico in cima alla lista del tempo
    const nuovoOrdine = [
      idAmico,
      ...ordineCronologico.filter((id) => id !== idAmico),
    ];

    setStoricoMessaggi(nuoviMessaggi);
    setOrdineCronologico(nuovoOrdine);

    // salvo entrambe nel localstorage
    localStorage.setItem("mieChat", JSON.stringify(nuoviMessaggi));
    localStorage.setItem("ordineChat", JSON.stringify(nuovoOrdine));

    setTesto("");
  };

  return (
    <div
      className="position-fixed bottom-0 end-0 me-4 bg-white shadow rounded-top border d-none d-sm-block"
      style={{
        width: "320px",
        zIndex: 1050,
        transition: "all 0.2s ease-in-out",
      }}
    >
      {/* BARRA IN ALTO DEL MODALE*/}
      <div
        className="d-flex align-items-center justify-content-between p-2 rounded-top bg-white border-bottom"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-2">
          {contattoAttivo && isOpen ? (
            <>
              <ArrowLeft
                size={18}
                className="text-dark me-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setContattoAttivo(null);
                }}
              />
              <Image
                src={contattoAttivo.image}
                roundedCircle
                width="24"
                height="24"
                style={{ objectFit: "cover", cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/profile/${contattoAttivo._id}`);
                }}
              />
            </>
          ) : (
            <Image
              src={profilo?.image || "https://placehold.co/150"}
              roundedCircle
              width="28"
              height="28"
              style={{ objectFit: "cover" }}
            />
          )}
          <span className="fw-semibold text-dark small">
            {contattoAttivo && isOpen
              ? `${contattoAttivo.name} ${contattoAttivo.surname}`
              : "Messaggistica"}
          </span>
        </div>

        <div
          className="d-flex align-items-center gap-3 text-secondary"
          onClick={(e) => e.stopPropagation()}
        >
          <ThreeDots
            size={16}
            className="text-dark"
            style={{ cursor: "pointer" }}
          />
          <PencilSquare
            size={16}
            className="text-dark"
            style={{ cursor: "pointer" }}
          />
          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
            className="d-flex align-items-center"
          >
            {isOpen ? (
              <ChevronDown size={16} className="text-dark" />
            ) : (
              <ChevronUp size={16} className="text-dark" />
            )}
          </div>
        </div>
      </div>

      {/* CORPO MODALE */}
      {isOpen && (
        <div className="bg-white" style={{ height: "360px" }}>
          {!contattoAttivo ? (
            <div className="p-2 h-100 overflow-auto">
              <InputGroup className="mb-2 shadow-sm rounded">
                <InputGroup.Text className="bg-light border-end-0">
                  <Search size={14} className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Cerca messaggi"
                  className="bg-light border-start-0"
                  style={{ fontSize: "0.85rem", height: "32px" }}
                />
              </InputGroup>

              {contattiOrdinati.length === 0 ? (
                <p className="text-muted text-center mt-4 small">
                  Nessun contatto seguito.
                </p>
              ) : (
                contattiOrdinati.map((c) => {
                  const messaggiContatto = storicoMessaggi[c._id] || [];
                  const ultimoMessaggio =
                    messaggiContatto[messaggiContatto.length - 1];

                  return (
                    <div
                      key={c._id}
                      onClick={() => setContattoAttivo(c)}
                      className="d-flex align-items-center gap-2 p-2 rounded border-bottom text-start"
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        src={c.image}
                        roundedCircle
                        width="34"
                        height="34"
                        style={{ objectFit: "cover", cursor: "pointer" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/profile/${c._id}`);
                        }}
                      />
                      <div className="text-truncate">
                        <h6 className="m-0 fw-bold text-dark small">
                          {c.name} {c.surname}
                        </h6>
                        <p className="m-0 text-muted text-truncate small">
                          {ultimoMessaggio
                            ? ultimoMessaggio
                            : "Clicca per chattare"}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            <div className="d-flex flex-column h-100 bg-light">
              <div className="p-2 flex-grow-1 overflow-auto">
                {(storicoMessaggi[contattoAttivo._id] || []).map((msg, idx) => (
                  <div
                    key={idx}
                    className="d-flex justify-content-end align-items-end gap-1 mb-2"
                  >
                    <div
                      className="bg-primary text-white p-2 rounded-3 small"
                      style={{ maxWidth: "75%" }}
                    >
                      {msg}
                    </div>
                    <Image
                      src={profilo?.image || "https://placehold.co/150"}
                      roundedCircle
                      width="20"
                      height="20"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>

              <Form
                onSubmit={inviaMessaggio}
                className="p-2 border-top bg-white d-flex gap-1"
              >
                <Form.Control
                  type="text"
                  placeholder="Scrivi un messaggio..."
                  value={testo}
                  onChange={(e) => setTesto(e.target.value)}
                  style={{ fontSize: "0.8rem" }}
                />
                <Button
                  variant="primary"
                  type="submit"
                  size="sm"
                  className="rounded-pill"
                >
                  Invia
                </Button>
              </Form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Messaggistica;
