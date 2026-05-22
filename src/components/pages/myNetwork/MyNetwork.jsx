import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import Caricamento from "../../status/Caricamento"
import AvvisoErrore from "../../status/AvvisoErrore"
import SmallFooter from "../../SmallFooter"
import NetworkPeopleYouMayKnow from "./NetworkPeopleYouMayKnow"
import NetworkSideBar from "./NetworkSideBar"
import NetworkProfileCard from "./NetworkProfilesCard"

const MyNetwork = () => {
  // Leggiamo lo stato del caricamento, dell'errore e del profilo da Redux
  const errore = useSelector((state) => state.profilo.error)
  const loading = useSelector((state) => state.profilo.loadingUsers)
  const allFollowed = useSelector((rs) => rs.network.followed)

  return (
    <>
      <div className="d-flex justify-content-center">
        <Container
          fluid={true}
          className="d-flex justify-content-center m-0 container-mw mt-3"
        >
          <Row className=" flex-row-reverse justify-content-center px-0 ">
            {/* Controllo errori */}
            {errore && (
              <Col xs={12} md={12} className="mb-3">
                <AvvisoErrore messaggio={errore} />
              </Col>
            )}
            {/* Controllo caricamento */}
            {loading && (
              <Col xs={12}>
                <Caricamento />
              </Col>
            )}
            {/* Controllo se non ci sono caricamenti ed i dati sono arrivati */}

            <>
              {/* Sezione centrale main */}
              <Col xs={12} md={8}>
                <div style={{ flex: 1 }}>
                  {loading && <p>Caricamento...</p>}

                  <div className="card shadow-sm mb-3 p-2">
                    <h4 className="fw-bold mb-0 mt-1">La tua rete</h4>
                    <Row
                      className="g-2 mt-1"
                      xs={1}
                      sm={1}
                      md={2}
                      lg={3}
                      xl={4}
                    >
                      {!allFollowed.length ? (
                        <>
                          <h6 className="p-1 w-100">
                            Aggiungi qualcuno alla tua rete per visualizzarlo
                            qui!
                          </h6>
                        </>
                      ) : (
                        allFollowed.map((profile) => (
                          <NetworkProfileCard
                            key={profile._id}
                            profile={profile}
                          />
                        ))
                      )}
                    </Row>
                  </div>
                </div>
                <NetworkPeopleYouMayKnow />
              </Col>

              {/* Colonna a Destra (aside) */}
              <Col xs={12} md={4} className="d-flex flex-column mb-4">
                <NetworkSideBar />
                <SmallFooter />
              </Col>
            </>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MyNetwork
