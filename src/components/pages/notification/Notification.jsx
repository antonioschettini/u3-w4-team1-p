import { Container, Card, Image, Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"

// Importiamo le funzioni per le PERSONE
import {
  markAsRead as markUserAsRead,
  removeNotification as removeUserNotification,
} from "../../../redux/reducers/networkReducer"
// Importiamo le funzioni per i LAVORI
import {
  markJobAsRead,
  removeJobNotification,
} from "../../../redux/reducers/jobsReducer"

import { X } from "react-bootstrap-icons"
import LeftSidebar from "../home/LeftSidebar"
import { showHideJobModal, visualizedJob } from "../../../redux/actions"

const Notification = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //  Recuperiamo entrambe le liste
  const userNotifications = useSelector((state) => state.network.followed) || []
  const jobNotifications = useSelector((state) => state.jobs.followedJobs) || []
  // Le uniamo in un'unica grande lista e le ordiniamo dalla più recente alla più vecchia
  const allNotifications = [...userNotifications, ...jobNotifications]
  const notificheInvertite = allNotifications.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  )

  // Gestisce il click sulla riga
  const handleNotificationClick = (item) => {
    // Se c'è 'company_name' significa che è un lavoro, altrimenti è un utente
    if (item.company_name) {
      dispatch(markJobAsRead(item._id))
    } else {
      dispatch(markUserAsRead(item._id))
    }
  }
  const handleNotificationClickNavigate = (item) => {
    // Se c'è 'company_name' significa che è un lavoro, altrimenti è un utente
    if (item.company_name) {
      dispatch(visualizedJob(item))
      dispatch(showHideJobModal(true))
    } else {
      navigate(`/profile/${item._id}`) // reindirizza al profilo utente
    }
  }

  // Gestisce l'eliminazione con la X
  const handleRimuoviClick = (e, item) => {
    e.stopPropagation()
    if (item.company_name) {
      dispatch(removeJobNotification(item._id))
    } else {
      dispatch(removeUserNotification(item._id))
    }
  }

  const calcolaTempoPassato = (dataCreazione) => {
    if (!dataCreazione) return "Di recente"
    const adesso = new Date()
    const dataNotifica = new Date(dataCreazione)
    const differenzaInMillisecondi = adesso - dataNotifica
    const minuti = Math.floor(differenzaInMillisecondi / 1000 / 60)
    const ore = Math.floor(minuti / 60)

    if (minuti < 1) {
      return "Adesso"
    } else if (minuti < 60) {
      return `${minuti} min fa`
    } else if (ore < 24) {
      return `${ore} o fa`
    } else {
      return dataNotifica.toLocaleDateString()
    }
  }

  return (
    <Container className="mt-4 " style={{ maxWidth: "1100px" }}>
      <Row className="justify-content-between">
        <Col md={3} className="d-none d-md-block mb-3">
          <LeftSidebar />
        </Col>

        <Col xs={12} md={8}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-0">
              <h5 className="p-3 border-bottom mb-0 fw-bold">Notifiche</h5>

              {notificheInvertite.length === 0 ? (
                <div className="p-4 text-center text-muted">
                  Non hai nuove notifiche.
                </div>
              ) : (
                notificheInvertite.map((item) => {
                  // condizionale se ha company_name è un lavoro
                  const isJob = !!item.company_name

                  return (
                    <div
                      key={item._id}
                      onClick={() => handleNotificationClick(item)}
                      className="d-flex align-items-center justify-content-between p-3 border-bottom"
                      style={{
                        backgroundColor: item.isRead ? "#FFFFFF" : "#DDE7F1",
                        cursor: "pointer",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          // Se è un lavoro carica il logo, se è una persona carica la sua foto
                          src={
                            isJob
                              ? item.company_logo_url
                              : item.image || "https://placehold.co/150"
                          }
                          roundedCircle={!isJob} // Rotondo per utenti, quadrato coi bordi per aziende
                          rounded={isJob}
                          width="50"
                          height="50"
                          className="me-3"
                          style={{ objectFit: "cover" }}
                          onClick={() => handleNotificationClickNavigate(item)}
                        />
                        <div>
                          <p className="mb-0">
                            <strong
                              onClick={() =>
                                handleNotificationClickNavigate(item)
                              }
                            >
                              {/* Se è un lavoro mostra il nome dell'azienda, altrimenti Nome e Cognome utente */}
                              {isJob
                                ? item.company_name
                                : `${item.name} ${item.surname}`}
                            </strong>{" "}
                            {/* Cambiamo la frase finale */}
                            {isJob
                              ? "hai appena iniziato a seguire questa offerta di lavoro."
                              : "è stato aggiunto alla tua rete."}
                          </p>
                          {/*  sia utenti che lavori hanno la proprietà title per il nome */}
                          <small className="text-muted">{item.title}</small>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <small
                          className="text-muted"
                          style={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}
                        >
                          {calcolaTempoPassato(item.createdAt)}
                        </small>

                        <X
                          size={24}
                          className="text-muted text-hover-dark"
                          onClick={(e) => handleRimuoviClick(e, item)} // <-- Passiamo l'intero 'item' per riconoscerlo
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  )
                })
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Notification
