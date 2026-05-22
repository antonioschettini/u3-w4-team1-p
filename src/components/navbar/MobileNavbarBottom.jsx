import {
  BellFill,
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  PlusSquareFill,
} from "react-bootstrap-icons"
import { Badge, Container, Navbar } from "react-bootstrap"
import { Link } from "react-router"
import { useSelector } from "react-redux"
import CreatePostModal from "../pages/home/CreatePostModal"
import { useState } from "react"

function MobileNavbarBottom() {
  // Sommiamo le notifiche degli utenti e dei lavori
  const allFollowedUsers = useSelector((state) => state.network.followed)
  const allFollowedJobs = useSelector((state) => state.jobs.followedJobs)

  const unreadUsersCount = (allFollowedUsers || []).filter(
    (user) => !user.isRead,
  ).length
  const unreadJobsCount = (allFollowedJobs || []).filter(
    (job) => !job.isRead,
  ).length

  // Il totale è la somma dei due numeri
  const unreadCount = unreadUsersCount + unreadJobsCount

  const [showCardModal, setShowCardModal] = useState(false)

  const apriModal = () => setShowCardModal(true)
  const chiudiModal = () => setShowCardModal(false)
  return (
    <>
      <Navbar expand="lg" className="bg-white pb-1 pt-2 shadow-lg">
        <Container fluid className=" p-0">
          <div className="d-flex w-100 justify-content-between align-items-end">
            <Link
              className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
              to="/"
            >
              <HouseDoorFill className="nav-link-color-e" size={24} />
              <small className="text-truncate nav-link-color-e w-100">
                Home
              </small>
            </Link>

            <Link
              className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
              to="/mynetwork"
            >
              <PeopleFill className="nav-link-color-e" size={24} />
              <small className="text-truncate nav-link-color-e w-100">
                La mia rete
              </small>
            </Link>

            <div
              className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
              onClick={apriModal}
            >
              <PlusSquareFill className="nav-link-color-e" size={20} />
              <small className="text-truncate nav-link-color-e w-100">
                Pubblica
              </small>
            </div>

            <Link
              className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
              to="/notification"
            >
              <div className="position-relative d-inline-block">
                <BellFill size={20} className="nav-link-color-e" />

                {/* Se ci sono notifiche,*/}
                {unreadCount > 0 && (
                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute bottom-0 start-100 translate-middle border border-white"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {unreadCount}
                  </Badge>
                )}
              </div>

              <small className={`text-truncate nav-link-color-e w-100`}>
                Notifiche
              </small>
            </Link>

            <Link
              className="nav-link nav-link-color d-flex flex-column align-items-center justify-content-bottom text-center flex-grow-1"
              to="/jobs"
            >
              <BriefcaseFill className="nav-link-color-e" size={24} />
              <small className="text-truncate nav-link-color-e w-100">
                Lavoro
              </small>
            </Link>
          </div>
        </Container>
      </Navbar>
      <CreatePostModal show={showCardModal} onClose={chiudiModal} />
    </>
  )
}

export default MobileNavbarBottom
