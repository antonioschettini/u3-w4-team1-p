import DesktopNavbar from "./DesktopNavbar"
import MobileNavbarBottom from "./MobileNavbarBottom"
import MobileNavbar from "./MobileNavbarTop"

function MyNavbar() {
  return (
    <>
      <div className="position-sticky sticky-top shadow-sm">
        <div className="d-block d-sm-none ">
          <MobileNavbar />
        </div>
        <div className="d-none d-sm-block">
          <DesktopNavbar />
        </div>
        <div className="d-block d-sm-none position-fixed fixed-bottom">
          <MobileNavbarBottom />
        </div>
      </div>
    </>
  )
}

export default MyNavbar
