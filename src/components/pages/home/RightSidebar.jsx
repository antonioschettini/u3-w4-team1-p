import { Bookmark } from "react-bootstrap-icons";
import SmallFooter from "../../SmallFooter"

function RightSidebar() {
  return (
    <>
     <div className="d-none d-lg-block" style={{ width: 300, flexShrink: 0 }}>
      
        {/* Card 1 — Notizie */}
        <div className="card shadow-sm mb-2">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">LinkedIn Notizie</h6>
              <Bookmark size={16} className="text-muted" />
            </div>

            <p className="small fw-semibold mb-2">Storie principali</p>

            {[
              {
                titolo: "Tutti pazzi per il nuovo Royal Pop",
                ora: "17h fa",
                lettori: "825 lettori",
              },
              {
                titolo: "Flatmates passa a Cosmico",
                ora: "17h fa",
                lettori: "222 lettori",
              },
              {
                titolo: "Cosa si dice al momento del turismo 2026",
                ora: "10h fa",
                lettori: "158 lettori",
              },
              {
                titolo: "Neolaureati tra stage e stipendi bassi",
                ora: "17h fa",
                lettori: "119 lettori",
              },
              {
                titolo: "Internazionali di Roma: vince Sinner",
                ora: "1h fa",
                lettori: "1.434 lettori",
              },
            ].map((news) => (
              <div
                key={news.titolo}
                className="mb-2"
                style={{ cursor: "pointer" }}
              >
                <p className="small fw-semibold mb-0">• {news.titolo}</p>
                <p className="text-muted mb-1" style={{ fontSize: 11 }}>
                  {news.ora} · {news.lettori}
                </p>
              </div>
            ))}

            <p className="small text-muted" style={{ cursor: "pointer" }}>
              Mostra altre notizie ▾
            </p>
          </div>
        </div>

        {/* Card 2 — Rompicapo di oggi */}
        <div className="card shadow-sm mb-2">
          <div className="card-body">
            <h6 className="fw-bold mb-3">Il rompicapo di oggi</h6>

            <div
              className="d-flex align-items-center gap-2 py-2 border-bottom"
              style={{ cursor: "pointer" }}
            >
              <div
                className="rounded-2"
                style={{
                  width: 36,
                  height: 36,
                  background: "#ca4965",
                  flexShrink: 0,
                }}
              ></div>
              <div className="flex-grow-1">
                <p className="small fw-semibold mb-0">Patches #63</p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Metti insieme i pezzi
                </p>
              </div>
              <span className="text-muted">›</span>
            </div>

            <div
              className="d-flex align-items-center gap-2 py-2 border-bottom"
              style={{ cursor: "pointer" }}
            >
              <div
                className="rounded-2"
                style={{
                  width: 36,
                  height: 36,
                  background: "#63e078",
                  flexShrink: 0,
                }}
              ></div>
              <div className="flex-grow-1">
                <p className="small fw-semibold mb-0">Zip #428</p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Completa il percorso
                </p>
              </div>
              <span className="text-muted">›</span>
            </div>

            <div
              className="d-flex align-items-center gap-2 py-2 border-bottom"
              style={{ cursor: "pointer" }}
            >
              <div
                className="rounded-2"
                style={{
                  width: 36,
                  height: 36,
                  background: "#52437c",
                  flexShrink: 0,
                }}
              ></div>
              <div className="flex-grow-1">
                <p className="small fw-semibold mb-0">
                  Mini Sudoku rgb(47, 41, 121)
                </p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Il gioco classico, in versione mini
                </p>
              </div>
              <span className="text-muted">›</span>
            </div>

            <div
              className="d-flex align-items-center gap-2 py-2"
              style={{ cursor: "pointer" }}
            >
              <div
                className="rounded-2"
                style={{
                  width: 36,
                  height: 36,
                  background: "#e992c3",
                  flexShrink: 0,
                }}
              ></div>
              <div className="flex-grow-1">
                <p className="small fw-semibold mb-0">Tango rgb(50, 97, 112)</p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Armonizza la griglia
                </p>
              </div>
              <span className="text-muted">›</span>
            </div>

            <p className="small text-muted mt-2" style={{ cursor: "pointer" }}>
              Mostra altro ▾
            </p>
          </div>
        </div>

        {/* Card 3 — Pubblicità */}

        <img
          src="/pubblicità.png"
          alt="pubblicità"
          className="w-100 rounded-3 mb-3"
          style={{ objectFit: "cover" }}
        />
        <SmallFooter/>
      </div>
    </>
  );
}

export default RightSidebar;
