import { useState } from "react";

export default function TangoGame() {
  const [grid, setGrid] = useState([true, false, true, false]);

  const toggle = (i) => {
    const newGrid = [...grid];
    [i - 1, i, i + 1].forEach((idx) => {
      if (idx >= 0 && idx < 4) newGrid[idx] = !newGrid[idx];
    });
    setGrid(newGrid);
  };

  const isWon = grid.every((cell) => cell === false);

  return (
    <div className="text-center">
      <p className="small text-muted">
        Spegni tutte le luci viola. Cliccando una casella, inverti lei e i
        vicini.
      </p>
      <div className="d-flex gap-2 justify-content-center mb-3">
        {grid.map((isOn, i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 60,
              background: isOn ? "#6f42c1" : "#adb5bd",
              cursor: "pointer",
              borderRadius: "8px",
            }}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
      {isWon && (
        <div className="alert alert-success">Tutto spento! Vittoria! ✨</div>
      )}
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setGrid([true, false, true, false])}
      >
        Reset
      </button>
    </div>
  );
}
