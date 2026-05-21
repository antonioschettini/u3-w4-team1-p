import { Container, Card, Image, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  markAsRead,
  removeNotification,
} from "../../../redux/reducers/networkReducer";
import { X } from "react-bootstrap-icons";
import LeftSidebar from "../home/LeftSidebar";

const Notification = () => {
  const dispatch = useDispatch();

  // Recuperiamo la lista degli utenti dallo store
  const notifications = useSelector((state) => state.network.followed);

  // Creiamo una copia della lista e la capovolgiamo con .reverse()
  const notificheInvertite = [...notifications].reverse();

  // Gestisce il click per segnare come letto
  const handleNotificationClick = (userId) => {
    dispatch(markAsRead(userId));
  };

  // funzione per eliminare la notifica premendo sulla X
  const handleRimuoviClick = (e, userId) => {
    e.stopPropagation(); // Ferma il click, evitando che la riga venga segnata come letta prima di sparire
    dispatch(removeNotification(userId)); //  Rimuove l'utente dallo store Redux
  };

  // funzione per calcolare il tempo reale passato dal momento del "Aggiungi"
  const calcolaTempoPassato = (dataCreazione) => {
    if (!dataCreazione) return "Di recente";

    const adesso = new Date();
    const dataNotifica = new Date(dataCreazione);
    const differenzaInMillisecondi = adesso - dataNotifica;

    // Convertiamo i millisecondi in minuti e ore
    const minuti = Math.floor(differenzaInMillisecondi / 1000 / 60);
    const ore = Math.floor(minuti / 60);

    if (minuti < 1) {
      return "Adesso";
    } else if (minuti < 60) {
      return `${minuti} min fa`;
    } else if (ore < 24) {
      return `${ore} o fa`;
    } else {
      return dataNotifica.toLocaleDateString(); // Se passano i giorni mostra la data
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "1100px" }}>
      <Row>
        {/* COLONNA SINISTRA: Barra del profilo */}
        <Col md={3} className="d-none d-md-block mb-3">
          <LeftSidebar />
        </Col>

        {/* COLONNA DESTRA: Elenco Notifiche */}
        <Col xs={12} md={9}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-0">
              <h5 className="p-3 border-bottom mb-0 fw-bold">Notifiche</h5>

              {notificheInvertite.length === 0 ? (
                <div className="p-4 text-center text-muted">
                  Non hai nuove notifiche.
                </div>
              ) : (
                notificheInvertite.map((user) => (
                  <div
                    key={user._id}
                    onClick={() => handleNotificationClick(user._id)}
                    className="d-flex align-items-center justify-content-between p-3 border-bottom"
                    style={{
                      backgroundColor: user.isRead ? "#FFFFFF" : "#DDE7F1",
                      cursor: "pointer",
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <Image
                        src={user.image || "https://placehold.co/150"}
                        roundedCircle
                        width="50"
                        height="50"
                        className="me-3"
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <p className="mb-0">
                          <strong>
                            {user.name} {user.surname}
                          </strong>{" "}
                          è stato aggiunto alla tua rete.
                        </p>
                        <small className="text-muted">{user.title}</small>
                      </div>
                    </div>

                    {/* Sezione destra Tempo e X */}
                    <div className="d-flex align-items-center gap-3">
                      <small
                        className="text-muted"
                        style={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}
                      >
                        {calcolaTempoPassato(user.createdAt)}
                      </small>

                      {/* Icona della X per cancellare la singola notifica */}
                      <X
                        size={24}
                        className="text-muted text-hover-dark"
                        onClick={(e) => handleRimuoviClick(e, user._id)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Notification;
