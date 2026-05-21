import { useState, useEffect } from "react";

export default function ZipGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [status, setStatus] = useState("idle"); // 'idle', 'playing', 'finished'
  const [size, setSize] = useState(80);
  const [pos, setPos] = useState({ top: 120, left: 100 });

  // Timer logic
  useEffect(() => {
    if (status === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && status === "playing") {
      setStatus("finished");
    }
  }, [timeLeft, status]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setSize(80);
    setPos({ top: 120, left: 100 });
    setStatus("playing");
  };

  const handleClick = () => {
    if (status !== "playing") return;
    setScore((prev) => prev + 1);
    setSize((prev) => Math.max(20, prev - 5)); // Diventa più piccolo
    setPos({
      top: Math.random() * 200,
      left: Math.random() * 200,
    });
  };

  return (
    <div className="text-center" style={{ height: "350px" }}>
      <p className="small text-muted">
        Clicca il tasto: diventa sempre più piccolo e si sposta. Raggiungi 10
        click in 10 secondi!
      </p>

      {status === "idle" && (
        <button className="btn btn-primary mt-4" onClick={startGame}>
          Inizia il Gioco
        </button>
      )}

      {status === "playing" && (
        <>
          <h5 className="mb-3">
            Tempo: {timeLeft}s | Click: {score}
          </h5>
          <div style={{ position: "relative", height: "250px" }}>
            <button
              className="btn btn-danger position-absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${pos.top}px`,
                left: `${pos.left}px`,
                transition: "0.1s",
              }}
              onClick={handleClick}
            >
              {score === 0 ? "Click!" : ""}
            </button>
          </div>
        </>
      )}

      {status === "finished" && (
        <div className="mt-4">
          <div
            className={`alert ${score >= 10 ? "alert-success" : "alert-danger"}`}
          >
            <h5>{score >= 10 ? "Vittoria! 🎉" : "Ritenta! ❌"}</h5>
            <p>Il tuo record finale: {score} click.</p>
          </div>
          <button className="btn btn-outline-secondary" onClick={startGame}>
            Gioca di nuovo
          </button>
        </div>
      )}
    </div>
  );
}
