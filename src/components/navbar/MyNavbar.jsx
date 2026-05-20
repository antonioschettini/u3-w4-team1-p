import { useState } from "react"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbarBottom from "./MobileNavbarBottom"
import MobileNavbarTop from "./MobileNavbarTop"

function MyNavbar() {
  const [offset, setOffset] = useState(0)
  const [windowScroll, setWindowScroll] = useState(0)

  const handleScroll = () => {
    const windowSum =
      windowScroll === window.scrollY ? 0 : windowScroll - window.scrollY

    const currentScrollY =
      offset > 0
        ? 0
        : offset < -50
          ? -50
          : offset + windowSum > 0
            ? 0
            : offset + windowSum < -50
              ? -50
              : offset + windowSum

    setOffset(currentScrollY)
    setWindowScroll(window.scrollY)
  }

  window.addEventListener("scroll", handleScroll)

  const topStyle = {
    transform: `translateY(${offset}px)`,
  }

  const bottomStyle = {
    transform: `translateY(${-offset * 1.2}px)`,
  }

  return (
    <>
      <div className="d-block d-sm-none shadow-sm sticky-top" style={topStyle}>
        <MobileNavbarTop />
      </div>

      <div className="d-none d-sm-block shadow-sm position-sticky sticky-top">
        <DesktopNavbar />
      </div>

      <div
        className="d-block d-sm-none position-fixed fixed-bottom"
        style={bottomStyle}
      >
        <MobileNavbarBottom />
      </div>
    </>
  )
}

export default MyNavbar
