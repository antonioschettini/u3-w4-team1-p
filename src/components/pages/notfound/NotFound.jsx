import { useNavigate } from "react-router";
import { Button, Container, Card } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Card className="card-linkedin p-5 text-center">
        <h1 className="display-4 fw-bold" style={{ color: "#000" }}>
          404
        </h1>
        <h2 className="h4 mt-3" style={{ color: "#333" }}>
          Pagina non trovata
        </h2>
        <p className="text-muted mt-2">
          Sembra che il collegamento non sia più attivo o che la pagina sia
          stata spostata.
        </p>

        <Button
          className="btn-linkedin rounded-pill mt-4"
          onClick={() => navigate("/")}
        >
          Torna al Feed
        </Button>
      </Card>
    </Container>
  );
};

export default NotFound;
