import { useState, useEffect } from "react";

export default function PatchGame() {
  const [cards, setCards] = useState(
    ["🍎", "🍎", "🍌", "🍌", "🍒", "🍒", "🍇", "🍇"].sort(
      () => Math.random() - 0.5,
    ),
  );
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft > 0 && solved.length < 8) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, solved]);

  const handleFlip = (idx) => {
    if (flipped.length < 2 && !flipped.includes(idx) && !solved.includes(idx)) {
      setFlipped([...flipped, idx]);
    }
  };

  useEffect(() => {
    if (flipped.length === 2) {
      if (cards[flipped[0]] === cards[flipped[1]]) {
        setSolved([...solved, ...flipped]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped]);

  return (
    <div className="text-center">
      <p className="small text-muted">
        Trova le coppie identiche. Hai 30 secondi!
      </p>
      <div className="h4">
        {timeLeft > 0 ? `Tempo: ${timeLeft}s` : "Tempo scaduto!"}
      </div>
      <div
        className="d-grid gap-2"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
      >
        {cards.map((icon, idx) => (
          <button
            key={idx}
            className={`btn ${solved.includes(idx) ? "btn-success" : "btn-outline-primary"} p-3`}
            onClick={() => handleFlip(idx)}
          >
            {flipped.includes(idx) || solved.includes(idx) ? icon : "❓"}
          </button>
        ))}
      </div>
      {solved.length === 8 && (
        <div className="alert alert-success mt-3">
          Complimenti! Hai vinto! 🎉
        </div>
      )}
    </div>
  );
}
