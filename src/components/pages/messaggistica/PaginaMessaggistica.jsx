import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import RightSidebar from "../home/RightSidebar";

const PaginaMessaggistica = () => {
  const navigate = useNavigate();
  const contatti = useSelector((state) => state.network.followed) || [];
  const profilo = useSelector((state) => state.profilo.mioProfilo);

  const [contattoAttivo, setContattoAttivo] = useState(null);
  const [testo, setTesto] = useState("");
  const [storicoMessaggi, setStoricoMessaggi] = useState({});
  //  Per ordinare in modo cronologico
  const [ordineCronologico, setOrdineCronologico] = useState([]);

  // Mette in cima in base all'ordine di invio
  const contattiOrdinati = [...contatti].sort((a, b) => {
    const indiceA = ordineCronologico.indexOf(a._id);
    const indiceB = ordineCronologico.indexOf(b._id);

    if (indiceA !== -1 && indiceB !== -1) return indiceA - indiceB;
    if (indiceA !== -1) return -1;
    if (indiceB !== -1) return 1;
    return 0;
  });

  useEffect(() => {
    const chatSalvate = localStorage.getItem("mieChat");
    const ordineSalvato = localStorage.getItem("ordineChat");

    let chatPrecedenti = {};
    let ordinePrecedente = [];

    if (chatSalvate) {
      chatPrecedenti = JSON.parse(chatSalvate);
      setStoricoMessaggi(chatPrecedenti);
    }
    if (ordineSalvato) {
      ordinePrecedente = JSON.parse(ordineSalvato);
      setOrdineCronologico(ordinePrecedente);
    }

    // Se l'utente non ha selezionato nessuno, apriamo l'ultimissima chat usata in assoluto
    if (!contattoAttivo && ordinePrecedente.length > 0) {
      const ultimoId = ordinePrecedente[0];
      const trovato = contatti.find((c) => c._id === ultimoId);
      if (trovato) {
        setContattoAttivo(trovato);
      }
    }
  }, [contatti]);

  const inviaMessaggio = (e) => {
    e.preventDefault();
    if (testo.trim() === "" || contattoAttivo === null) return;

    const idAmico = contattoAttivo._id;
    const chatConQuestoAmico = storicoMessaggi[idAmico] || [];

    const messaggiAggiornati = {
      ...storicoMessaggi,
      [idAmico]: [...chatConQuestoAmico, testo],
    };

    // Mette l'id in cima alla lista temporale
    const nuovoOrdine = [
      idAmico,
      ...ordineCronologico.filter((id) => id !== idAmico),
    ];

    setStoricoMessaggi(messaggiAggiornati);
    setOrdineCronologico(nuovoOrdine);

    localStorage.setItem("mieChat", JSON.stringify(messaggiAggiornati));
    localStorage.setItem("ordineChat", JSON.stringify(nuovoOrdine));
    setTesto("");
  };

  return (
    <Container className="my-4">
      <Row>
        {/* Lista Contatti */}
        <Col xs={12} md={4} lg={3} className="mb-3">
          <Card className="shadow-sm overflow-auto" style={{ height: "75vh" }}>
            <h5 className="p-3 m-0 border-bottom fw-bold bg-white">Messaggi</h5>
            <ListGroup variant="flush">
              {contattiOrdinati.map((contatto) => {
                const messaggiContatto = storicoMessaggi[contatto._id] || [];
                const ultimoMessaggio =
                  messaggiContatto[messaggiContatto.length - 1];

                return (
                  <ListGroup.Item
                    key={contatto._id}
                    action
                    active={contattoAttivo?._id === contatto._id}
                    onClick={() => setContattoAttivo(contatto)}
                    className="d-flex align-items-center gap-2 p-3 text-start"
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={contatto.image}
                      roundedCircle
                      width="40"
                      height="40"
                      style={{ objectFit: "cover", cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/profile/${contatto._id}`);
                      }}
                    />
                    <div className="text-truncate">
                      <h6 className="m-0 fw-bold small">
                        {contatto.name} {contatto.surname}
                      </h6>
                      <small className="text-muted text-truncate d-block">
                        {ultimoMessaggio
                          ? ultimoMessaggio
                          : "Clicca per chattare"}
                      </small>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </Col>

        {/* Finestra di Chat */}
        <Col xs={12} md={8} lg={6} className="mb-3">
          <Card
            className="shadow-sm d-flex flex-column bg-light"
            style={{ height: "75vh" }}
          >
            {contattoAttivo ? (
              <>
                <div className="p-3 border-bottom bg-white d-flex align-items-center gap-2">
                  <Image
                    src={contattoAttivo.image}
                    roundedCircle
                    width="40"
                    height="40"
                    style={{ objectFit: "cover", cursor: "pointer" }}
                    onClick={() => navigate(`/profile/${contattoAttivo._id}`)}
                  />
                  <h6 className="m-0 fw-bold">
                    {contattoAttivo.name} {contattoAttivo.surname}
                  </h6>
                </div>

                <div className="p-3 flex-grow-1 overflow-auto bg-white">
                  {(storicoMessaggi[contattoAttivo._id] || []).map(
                    (msg, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-end align-items-end gap-2 mb-2"
                      >
                        <div
                          className="bg-primary text-white p-2 rounded-3 text-start"
                          style={{ maxWidth: "70%" }}
                        >
                          {msg}
                        </div>
                        <Image
                          src={profilo?.image || "https://placehold.co/150"}
                          roundedCircle
                          width="28"
                          height="28"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ),
                  )}
                </div>

                <div className="p-3 border-top bg-white">
                  <Form onSubmit={inviaMessaggio} className="d-flex gap-2">
                    <Form.Control
                      type="text"
                      placeholder="Scrivi un messaggio..."
                      value={testo}
                      onChange={(e) => setTesto(e.target.value)}
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      className="rounded-pill px-4"
                    >
                      Invia
                    </Button>
                  </Form>
                </div>
              </>
            ) : (
              <div className="d-flex align-items-center justify-content-center h-100 text-muted p-3 text-center">
                <h5>Seleziona una conversazione dalla lista per iniziare</h5>
              </div>
            )}
          </Card>
        </Col>

        {/* RightSidebar */}
        <Col lg={3} className="d-none d-lg-block">
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default PaginaMessaggistica;
