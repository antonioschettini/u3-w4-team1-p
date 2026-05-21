import { Col, Container, Row } from "react-bootstrap"
import { fetchSavedProfiles, fetchMioProfilo } from "../../../redux/actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Caricamento from "../../status/Caricamento"
import AvvisoErrore from "../../status/AvvisoErrore"
import SmallFooter from "../../SmallFooter"
import NetworkPeopleYouMayKnow from "./NetworkPeopleYouMayKnow"
import NetworkSideBar from "./NetworkSideBar"

const MyNetwork = () => {
  const dispatch = useDispatch()
  // Leggiamo lo stato del caricamento, dell'errore e del profilo da Redux
  const loading = useSelector((state) => state.profilo.loadingProfilo)
  const errore = useSelector((state) => state.profilo.error)
  const profilo = useSelector((state) => state.profilo.mioProfilo)

  useEffect(() => {
    dispatch(fetchSavedProfiles())
    dispatch(fetchMioProfilo())
  }, [dispatch])

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

            {!loading && profilo && (
              <>
                {/* Sezione centrale main */}
                <Col xs={12} md={8}>
                  <NetworkPeopleYouMayKnow />
                </Col>

                {/* Colonna a Destra (aside) */}
                <Col xs={12} md={4} className="d-flex flex-column">
                  <NetworkSideBar />
                  <SmallFooter />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MyNetwork
