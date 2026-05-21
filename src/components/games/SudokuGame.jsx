import { useState } from "react";

export default function SudokuGame() {
  const [grid, setGrid] = useState(Array(16).fill(""));
  const [status, setStatus] = useState("");

  const checkSudoku = () => {
    const board = [];
    for (let i = 0; i < 4; i++) board.push(grid.slice(i * 4, i * 4 + 4));

    // Verifica righe e colonne
    let valid = true;
    for (let i = 0; i < 4; i++) {
      const row = board[i].filter((n) => n !== "");
      const col = board.map((r) => r[i]).filter((n) => n !== "");
      if (new Set(row).size !== row.length || new Set(col).size !== col.length)
        valid = false;
    }
    setStatus(
      valid && grid.every((c) => c !== "")
        ? "Vittoria! ✨"
        : "Errore: numeri duplicati o griglia vuota ❌",
    );
  };

  return (
    <div className="text-center">
      <p className="small text-muted">
        Inserisci 1-4. Nessun duplicato per riga/colonna.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5px",
          marginBottom: "15px",
        }}
      >
        {grid.map((val, i) => (
          <input
            key={i}
            maxLength="1"
            className="form-control text-center"
            value={val}
            onChange={(e) => {
              const n = [...grid];
              n[i] = e.target.value.replace(/[^1-4]/, "");
              setGrid(n);
            }}
          />
        ))}
      </div>
      <button className="btn btn-primary" onClick={checkSudoku}>
        Verifica Risultato
      </button>
      <div
        className={`mt-3 alert ${status.includes("Vittoria") ? "alert-success" : "alert-warning"}`}
      >
        {status}
      </div>
    </div>
  );
}
