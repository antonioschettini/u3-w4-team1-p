import { useState } from "react";
import { Bookmark } from "react-bootstrap-icons";
import SmallFooter from "../../SmallFooter";
import GameModal from "../../games/GameModal";

function RightSidebar() {
  // Stato per gestire quale gioco aprire nel modale
  const [activeGame, setActiveGame] = useState(null);

  return (
    <>
      {/* Contenitore principale della sidebar (visibile solo su schermi grandi) */}
      <div
        className="d-none d-lg-block"
        style={{
          width: 300,
          flexShrink: 0,
        }}
      >
        {/* Card 1 — LinkedIn Notizie */}
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

            {/* Gioco Patches: apre il modale con il gioco di memoria */}
            <div
              className="d-flex align-items-center gap-2 py-2 border-bottom"
              style={{ cursor: "pointer" }}
              onClick={() => setActiveGame("patches")}
            >
              <div
                className="rounded-2"
                style={{ width: 36, height: 36, background: "#ca4965" }}
              ></div>
              <div>
                <p className="small fw-semibold mb-0">Patches #63</p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Metti insieme i pezzi
                </p>
              </div>
            </div>

            {/* Gioco Zip: apre il modale con il gioco di velocità/clic */}
            <div
              className="d-flex align-items-center gap-2 py-2 border-bottom"
              style={{ cursor: "pointer" }}
              onClick={() => setActiveGame("zip")}
            >
              <div
                className="rounded-2"
                style={{ width: 36, height: 36, background: "#63e078" }}
              ></div>
              <div>
                <p className="small fw-semibold mb-0">Zip #428</p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Completa il percorso
                </p>
              </div>
            </div>

            {/* Gioco Sudoku: apre il modale con la griglia numerica */}
            <div
              className="d-flex align-items-center gap-2 py-2 border-bottom"
              style={{ cursor: "pointer" }}
              onClick={() => setActiveGame("sudoku")}
            >
              <div
                className="rounded-2"
                style={{ width: 36, height: 36, background: "#52437c" }}
              ></div>
              <div>
                <p className="small fw-semibold mb-0">Mini Sudoku</p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Il gioco classico
                </p>
              </div>
            </div>

            {/* Gioco Tango: apre il modale con la griglia interattiva */}
            <div
              className="d-flex align-items-center gap-2 py-2"
              style={{ cursor: "pointer" }}
              onClick={() => setActiveGame("tango")}
            >
              <div
                className="rounded-2"
                style={{ width: 36, height: 36, background: "#e992c3" }}
              ></div>
              <div>
                <p className="small fw-semibold mb-0">Tango</p>
                <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                  Armonizza la griglia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — Pubblicità  */}
        <img
          src="/pubblicità.png"
          alt="pubblicità"
          className="w-100 rounded-3 mb-3"
          style={{ objectFit: "cover" }}
        />

        {/* Footer  */}
        <div style={{ position: "sticky", top: 70 }}>
          <SmallFooter />
        </div>
      </div>

      {/* Modale Giochi  */}
      <GameModal game={activeGame} onHide={() => setActiveGame(null)} />
    </>
  );
}

export default RightSidebar;
