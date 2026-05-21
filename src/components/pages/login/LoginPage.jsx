import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { effettuaLogin } from "../../../redux/reducers/authReducer";
import GoogleLoginModal from "./GoogleLoginModal";
import RegistrationModal from "./RegistrationModal";

const LoginPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [credenziali, setCredenziali] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const utenteRegistrato = useSelector((state) => state.auth.utenteRegistrato);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      utenteRegistrato &&
      utenteRegistrato.email === credenziali.email &&
      utenteRegistrato.password === credenziali.password
    ) {
      dispatch(effettuaLogin());
    } else {
      alert("Credenziali errate.");
    }
  };
  const handleCloseGoogle = () => {
    setShowGoogleModal(false); // Chiudi Google
    setShowModal(true); // Riapri Registrazione
  };

  return (
    <div className="bg-linkedin d-flex justify-content-center align-items-center">
      <Container className="d-flex flex-column align-items-center">
        <h1 className="mb-4" style={{ color: "#0a66c2", fontWeight: "bold" }}>
          Linked
          <span
            style={{
              backgroundColor: "#0a66c2",
              color: "white",
              padding: "0 5px",
              borderRadius: "3px",
            }}
          >
            in
          </span>
        </h1>
        <Card
          style={{
            width: "100%",
            maxWidth: "400px",
            border: "none",
            borderRadius: "8px",
            padding: "2rem",
          }}
          className="shadow-sm"
        >
          <h4 className="mb-4">Accedi</h4>
          <Form onSubmit={handleLogin}>
            <Form.Control
              type="email"
              placeholder="Email"
              className="mb-3 p-2"
              onChange={(e) =>
                setCredenziali({ ...credenziali, email: e.target.value })
              }
            />
            <Form.Control
              type="password"
              placeholder="Password"
              className="mb-3 p-2"
              onChange={(e) =>
                setCredenziali({ ...credenziali, password: e.target.value })
              }
            />
            <Button type="submit" className="w-100 btn-linkedin border-0">
              Accedi
            </Button>
          </Form>
          <div className="text-center mt-3">
            <span style={{ fontSize: "0.9rem", color: "#666" }}>
              Non hai un account?{" "}
            </span>
            <Button
              variant="link"
              className="p-0"
              style={{
                textDecoration: "none",
                color: "#0a66c2",
                fontWeight: "600",
              }}
              onClick={() => setShowModal(true)}
            >
              Registrati
            </Button>
          </div>
        </Card>
      </Container>
      <RegistrationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onOpenGoogle={() => {
          setShowModal(false); // Chiude il modale di registrazione
          setShowGoogleModal(true); // Apre il modale di Google
        }}
      />
      <GoogleLoginModal
        show={showGoogleModal}
        onHide={handleCloseGoogle} // Quando clicchi fuori o sulla X, torna alla registrazione
      />
    </div>
  );
};

export default LoginPage;
