import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  deletePost,
  aggiungiCommentoServer,
  fetchMioProfilo,
  fetchSavedProfiles,
  fetchCommenti,
  eliminaCommentoServer,
  modificaPostServer,
  modificaCommentoServer,
} from "../../../redux/actions";
import {
  Trash,
  Chat,
  XLg,
  Heart,
  HeartFill,
  PersonFill,
  Pencil,
} from "react-bootstrap-icons";
import Caricamento from "../../status/Caricamento";
import AvvisoErrore from "../../status/AvvisoErrore";
import { Card, Button, Form } from "react-bootstrap";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.profilo.listaPost) || [];
  const loading = useSelector((state) => state.profilo.loadingPost);
  const error = useSelector((state) => state.profilo.errorPost);
  const mioProfilo = useSelector((state) => state.profilo.mioProfilo);
  const tuttiGliUtenti = useSelector((state) => state.profilo.usersData) || [];
  const [postNascosti, setPostNascosti] = useState([]);
  const tuttiICommenti =
    useSelector((state) => state.profilo.listaCommenti) || [];
  const [commentiAperti, setCommentiAperti] = useState({});
  const [testoNuovoCommento, setTestoNuovoCommento] = useState({});

  // Stati per la modifica del Post
  const [postIdInModifica, setPostIdInModifica] = useState(null);
  const [testoPostInModifica, setTestoPostInModifica] = useState("");

  // Stati per la modifica del Commento
  const [commentIdInModifica, setCommentIdInModifica] = useState(null);
  const [testoCommentoInModifica, setTestoCommentoInModifica] = useState("");

  // salvataggio nello storage per commenti o post
  const [postPiaciuti, setPostPiaciuti] = useState(() => {
    const salvati = localStorage.getItem("postPiaciuti");
    return salvati ? JSON.parse(salvati) : {};
  });

  const [commentiPiaciuti, setCommentiPiaciuti] = useState(() => {
    const salvati = localStorage.getItem("commentiPiaciuti");
    return salvati ? JSON.parse(salvati) : {};
  });

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchMioProfilo());
    dispatch(fetchSavedProfiles());
    dispatch(fetchCommenti());
  }, [dispatch]);

  // salvataggio automatico dei like e posti al montaggio /aggiornamento pagina
  useEffect(() => {
    localStorage.setItem("postPiaciuti", JSON.stringify(postPiaciuti));
  }, [postPiaciuti]);

  useEffect(() => {
    localStorage.setItem("commentiPiaciuti", JSON.stringify(commentiPiaciuti));
  }, [commentiPiaciuti]);

  const nascondiPostDalloSchermo = (id) => {
    setPostNascosti([...postNascosti, id]);
  };

  const mettiMiPiace = (postId) => {
    setPostPiaciuti({
      ...postPiaciuti,
      [postId]: !postPiaciuti[postId],
    });
  };

  const mettiMiPiaceCommento = (commentId) => {
    setCommentiPiaciuti({
      ...commentiPiaciuti,
      [commentId]: !commentiPiaciuti[commentId],
    });
  };

  const toggleCommenti = (postId) => {
    setCommentiAperti({
      ...commentiAperti,
      [postId]: !commentiAperti[postId],
    });
  };

  const inviaCommento = (postId) => {
    const testo = testoNuovoCommento[postId];
    if (!testo || testo.trim() === "") return;

    dispatch(aggiungiCommentoServer(testo, postId));
    setTestoNuovoCommento({ ...testoNuovoCommento, [postId]: "" });
  };

  if (loading) return <Caricamento />;
  if (error) return <AvvisoErrore messaggio={error} />;

  return (
    <div className="container p-0">
      {posts.map((post) => {
        if (postNascosti.includes(post._id)) return null;

        const isMioPost = post.username === mioProfilo?.username;
        const autoreDelPost = tuttiGliUtenti.find(
          (utente) => utente.username === post.username,
        );

        const miPiace = postPiaciuti[post._id];
        const mostraCommenti = commentiAperti[post._id];

        let commentiDiQuestoPost = tuttiICommenti.filter(
          (c) => c.elementId === post._id,
        );

        if (commentiDiQuestoPost.length === 0) {
          commentiDiQuestoPost = [
            {
              _id: "finto-1",
              author: "Stefano Casasola",
              comment:
                "Mi dispiaceva che non ci fosse nessun commento quindi ne ho lasciato uno 🐈‍⬛🐈",
              createdAt: new Date().toISOString(),
            },
          ];
        }

        return (
          <Card
            key={post._id}
            className="mb-3 border-light-subtle rounded-3"
            style={{ borderRadius: "0.8rem" }}
          >
            <Card.Body className="p-0">
              {/* Intestazione del post */}
              <div className="d-flex justify-content-between align-items-start p-3 pb-1">
                <div className="d-flex gap-2">
                  {autoreDelPost?.image ? (
                    <img
                      src={autoreDelPost.image}
                      alt="autore"
                      className="rounded-circle"
                      width={48}
                      height={48}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <PersonFill size={48} className="text-secondary" />
                  )}

                  <div className="d-flex flex-column">
                    <h6
                      className="fw-bold mb-0 text-dark small hover-underline"
                      style={{ cursor: "pointer" }}
                    >
                      {post.username}
                    </h6>
                    <small
                      className="text-secondary"
                      style={{ fontSize: "0.75rem", lineHeight: "1.1" }}
                    >
                      {autoreDelPost?.title || "Membro di LinkedIn"}
                    </small>
                    <small
                      className="text-secondary mt-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {new Date(post.createdAt).toLocaleDateString()} • 🌐
                    </small>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  {isMioPost && (
                    <>
                      {/* BOTTONE MATITA PER MODIFICARE */}
                      <Button
                        variant="link"
                        className="text-secondary p-1 text-decoration-none border-0 hover-bg-light rounded-circle"
                        onClick={() => {
                          setPostIdInModifica(post._id); // Memorizza l'ID del post da modificare
                          setTestoPostInModifica(post.text); // Inserisce il testo attuale nella casella
                        }}
                      >
                        <Pencil size={16} />
                      </Button>
                      {/* BOTTONE CESTINO PER CANCELLARE */}
                      <Button
                        variant="link"
                        className="text-secondary p-1 text-decoration-none border-0 hover-bg-light rounded-circle"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Vuoi eliminare davvero questo post?",
                            )
                          ) {
                            dispatch(deletePost(post._id));
                          }
                        }}
                      >
                        <Trash size={18} />
                      </Button>
                    </>
                  )}
                  {/* BOTTONE X PER NASCONDERE */}
                  <Button
                    variant="link"
                    className="text-secondary p-1 text-decoration-none border-0 hover-bg-light rounded-circle"
                    onClick={() => nascondiPostDalloSchermo(post._id)}
                  >
                    <XLg size={18} />
                  </Button>
                </div>
              </div>

              {/* Testo del post */}
              {/* Se questo post è in modalità modifica, mostra la casella di testo, altrimenti mostra il testo normale */}
              {postIdInModifica === post._id ? (
                <div className="px-3 my-2">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={testoPostInModifica}
                    onChange={(e) => setTestoPostInModifica(e.target.value)}
                    className="border-1 text-dark mb-2 shadow-none"
                  />
                  <div className="d-flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      className="rounded-pill px-3 fw-bold"
                      onClick={() => {
                        dispatch(
                          modificaPostServer(post._id, testoPostInModifica),
                        );
                        setPostIdInModifica(null); // Chiude la modalità modifica
                      }}
                    >
                      Salva
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-pill px-3"
                      onClick={() => setPostIdInModifica(null)} // Chiude senza salvare
                    >
                      Annulla
                    </Button>
                  </div>
                </div>
              ) : (
                <Card.Text className="text-dark small px-3 mt-2 mb-2">
                  {post.text}
                </Card.Text>
              )}

              {/* foto del post */}
              {post.image && (
                <div className="w-100 bg-light text-center border-top border-bottom border-light-subtle mb-2">
                  <img
                    src={post.image}
                    alt="post content"
                    className="img-fluid"
                    style={{ maxHeight: "500px", objectFit: "contain" }}
                  />
                </div>
              )}

              {/* consigliato con il mio eventuale mi piace */}
              {miPiace && (
                <div
                  className="px-3 pb-2 text-secondary d-flex align-items-center gap-1"
                  style={{ fontSize: "0.75rem" }}
                >
                  <HeartFill size={12} color="#df704d" />
                  <span>
                    Consigliato da {mioProfilo?.name} {mioProfilo?.surname}
                  </span>
                </div>
              )}

              {/* bottoni consiglia e commenta */}
              <div className="d-flex gap-1 border-top pt-1 pb-1 px-2 mx-2">
                <Button
                  variant="transparent"
                  className={`flex-grow-1 d-flex align-items-center justify-content-center gap-2 py-2 border-0 rounded-2 fw-semibold ${miPiace ? "text-danger" : "text-secondary"}`}
                  style={{ fontSize: "0.85rem" }}
                  onClick={() => mettiMiPiace(post._id)}
                >
                  {miPiace ? <HeartFill size={18} /> : <Heart size={18} />}
                  <span>Consiglia</span>
                </Button>

                <Button
                  variant="transparent"
                  className="text-secondary flex-grow-1 d-flex align-items-center justify-content-center gap-2 py-2 border-0 rounded-2 fw-semibold"
                  style={{ fontSize: "0.85rem" }}
                  onClick={() => toggleCommenti(post._id)}
                >
                  <Chat size={18} />
                  <span>Commenta</span>
                </Button>
              </div>

              {/* sezione commenti */}
              {mostraCommenti && (
                <div className="px-3 pb-3 pt-2 bg-light border-top rounded-bottom-3">
                  {/* box di scrittura mio commento */}
                  <div className="d-flex gap-2 mt-2 align-items-start mb-3">
                    {mioProfilo?.image ? (
                      <img
                        src={mioProfilo.image}
                        alt="tu"
                        className="rounded-circle mt-1"
                        width={40}
                        height={40}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <PersonFill size={40} className="text-secondary mt-1" />
                    )}

                    <div className="flex-grow-1 w-100">
                      <Form.Control
                        as="textarea"
                        rows={1}
                        className="rounded-pill border-1 py-2 px-3 text-dark mb-2 shadow-none w-100"
                        style={{ resize: "none" }}
                        placeholder="Aggiungi un commento..."
                        value={testoNuovoCommento[post._id] || ""}
                        onChange={(e) =>
                          setTestoNuovoCommento({
                            ...testoNuovoCommento,
                            [post._id]: e.target.value,
                          })
                        }
                      />
                      {testoNuovoCommento[post._id]?.trim() && (
                        <Button
                          variant="primary"
                          size="sm"
                          className="rounded-pill px-3 fw-bold small"
                          onClick={() => inviaCommento(post._id)}
                        >
                          Pubblica
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* lista dei commenti */}
                  {commentiDiQuestoPost
                    .slice(-5)
                    .reverse()
                    .map((comm) => {
                      // controll se l'autore coincide con lo username, con l'email, oppure con nome e cognome
                      const mioNomeCompleto = `${mioProfilo?.name} ${mioProfilo?.surname}`;
                      // controlli per riconoscere se è un mio commento
                      const isMioCommento =
                        comm.author === mioProfilo?.username ||
                        comm.author === mioProfilo?.email ||
                        comm.author === mioNomeCompleto ||
                        comm.author === "antonio.schettini93+epicode@gmail.com";
                      comm.author?.toLowerCase().includes("schettini");

                      // Sceglie i dati del profilo corretti per mostrare la foto corretta
                      const utenteCheHaCommentato = isMioCommento
                        ? mioProfilo
                        : tuttiGliUtenti.find(
                            (utente) =>
                              utente.username === comm.author ||
                              utente.email === comm.author ||
                              `${utente.name} ${utente.surname}` ===
                                comm.author,
                          );

                      return (
                        <div key={comm._id} className="d-flex gap-2 mb-2">
                          {/* foto utente che ha commentato */}
                          {utenteCheHaCommentato?.image ? (
                            <img
                              src={utenteCheHaCommentato.image}
                              alt="autore commento"
                              className="rounded-circle"
                              width={35}
                              height={35}
                              style={{ objectFit: "cover" }}
                            />
                          ) : (
                            <PersonFill size={35} className="text-secondary" />
                          )}

                          <div className="bg-white px-3 py-2 rounded-3 border w-100 d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                              <div className="fw-semibold text-dark small">
                                {comm.author || "Utente LinkedIn"}
                              </div>

                              {/* Se questo commento è in modifica, mostra l'input, altrimenti il testo */}
                              {commentIdInModifica === comm._id ? (
                                <div className="mt-1">
                                  <Form.Control
                                    type="text"
                                    value={testoCommentoInModifica}
                                    onChange={(e) =>
                                      setTestoCommentoInModifica(e.target.value)
                                    }
                                    className="py-1 px-2 small mb-1 shadow-none"
                                  />
                                  <div className="d-flex gap-2">
                                    <Button
                                      variant="primary"
                                      size="sm"
                                      className="rounded-pill px-2 py-0 fw-bold"
                                      style={{ fontSize: "0.75rem" }}
                                      onClick={() => {
                                        dispatch(
                                          modificaCommentoServer(
                                            comm._id,
                                            testoCommentoInModifica,
                                            post._id,
                                          ),
                                        );
                                        setCommentIdInModifica(null); // Chiude la modifica
                                      }}
                                    >
                                      Salva
                                    </Button>
                                    <Button
                                      variant="secondary"
                                      size="sm"
                                      className="rounded-pill px-2 py-0"
                                      style={{ fontSize: "0.75rem" }}
                                      onClick={() =>
                                        setCommentIdInModifica(null)
                                      } // Annulla la modifica
                                    >
                                      Annulla
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <div className="text-dark small">
                                  {comm.comment}
                                </div>
                              )}

                              {/* Tasto mi piace al commento (rimane sotto al testo) */}
                              <Button
                                variant="link"
                                className="p-0 border-0 mt-1 d-flex align-items-center gap-1 text-decoration-none"
                                onClick={() => mettiMiPiaceCommento(comm._id)}
                              >
                                {commentiPiaciuti[comm._id] ? (
                                  <HeartFill
                                    size={14}
                                    className="text-danger"
                                  />
                                ) : (
                                  <Heart size={14} className="text-secondary" />
                                )}
                                <span
                                  style={{ fontSize: "0.75rem" }}
                                  className={
                                    commentiPiaciuti[comm._id]
                                      ? "text-danger"
                                      : "text-secondary"
                                  }
                                >
                                  Piace
                                </span>
                              </Button>
                            </div>

                            {/* Zona azioni a destra del commento (Matita e Cestino) */}
                            {isMioCommento && (
                              <div className="d-flex gap-1 align-items-center custom-buttons">
                                {/* TASTO MATITA PER MODIFICA COMMENTO */}
                                <Button
                                  variant="link"
                                  className="text-secondary p-1"
                                  onClick={() => {
                                    setCommentIdInModifica(comm._id); // Memorizza l'ID del commento
                                    setTestoCommentoInModifica(comm.comment); // Copia il testo attuale
                                  }}
                                >
                                  <Pencil size={14} />
                                </Button>

                                {/* TASTO CANCELLA COMMENTO */}
                                <Button
                                  variant="link"
                                  className="text-danger p-1"
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        "Vuoi eliminare questo commento?",
                                      )
                                    ) {
                                      dispatch(eliminaCommentoServer(comm._id));
                                    }
                                  }}
                                >
                                  <Trash size={16} />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PostsList;
