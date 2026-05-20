import { Card } from "react-bootstrap";

const OtherInformazioniBio = ({ profile }) => {
  const { bio } = profile;

  return (
    <Card className="shadow-sm mb-3 border-0 p-4 rounded-3 bg-white">
      {/* Titolo e Matita per modificare */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-dark m-0 fs-5">Informazioni</h4>
      </div>

      {/* 'whiteSpace: "pre-line"' serve a mantenere i paragrafi e gli elenchi ordinati */}
      <div
        className="text-dark lh-base mb-4"
        style={{ whiteSpace: "pre-line", fontSize: "0.92rem", color: "#333" }}
      >
        {bio ||
          "Nessuna biografia inserita. Clicca sulla matita per aggiungerne una!"}
      </div>
    </Card>
  );
};

export default OtherInformazioniBio;
