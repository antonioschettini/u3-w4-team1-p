import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
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
import { Link } from "react-router";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.profilo.listaPost) || [];
  const loading = useSelector((state) => state.profilo.loadingPost);
  const error = useSelector((state) => state.profilo.errorPost);

  const mioProfilo = useSelector((state) => state.profilo.mioProfilo);

  const tuttiGliUtenti = useSelector((state) => state.profilo.usersData) || [];

  const tuttiICommenti =
    useSelector((state) => state.profilo.listaCommenti) || [];

  const [postNascosti, setPostNascosti] = useState([]);
  const [commentiAperti, setCommentiAperti] = useState({});
  const [testoNuovoCommento, setTestoNuovoCommento] = useState({});

  const [postIdInModifica, setPostIdInModifica] = useState(null);
  const [testoPostInModifica, setTestoPostInModifica] = useState("");

  const [commentIdInModifica, setCommentIdInModifica] = useState(null);

  const [testoCommentoInModifica, setTestoCommentoInModifica] = useState("");

  const [postPiaciuti, setPostPiaciuti] = useState(() => {
    const salvati = localStorage.getItem("postPiaciuti");
    return salvati ? JSON.parse(salvati) : {};
  });

  const [commentiPiaciuti, setCommentiPiaciuti] = useState(() => {
    const salvati = localStorage.getItem("commentiPiaciuti");
    return salvati ? JSON.parse(salvati) : {};
  });

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchMioProfilo());
    dispatch(fetchSavedProfiles());
    dispatch(fetchCommenti());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("postPiaciuti", JSON.stringify(postPiaciuti));
  }, [postPiaciuti]);

  useEffect(() => {
    localStorage.setItem("commentiPiaciuti", JSON.stringify(commentiPiaciuti));
  }, [commentiPiaciuti]);

  const loadMore = () => {
    setTimeout(() => {
      const morePosts = posts.slice(
        visibleItems.length,
        visibleItems.length + 10,
      );

      setVisibleItems((prev) => [...prev, ...morePosts]);
    }, 1200);
  };

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

    setTestoNuovoCommento({
      ...testoNuovoCommento,
      [postId]: "",
    });
  };

  if (loading) return <Caricamento />;

  if (error) return <AvvisoErrore messaggio={error} />;

  return (
    <div className="container p-0">
      <InfiniteScroll
        dataLength={visibleItems.length}
        next={loadMore}
        hasMore={visibleItems.length < posts.length}
        loader={<Caricamento />}
      >
        {visibleItems.map((post) => {
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
                fotoFinta:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjj0UQXHlsnTaknKXlkezyEF4KOSbrCr3bA&s",
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
                {/* HEADER */}
                <div className="d-flex justify-content-between align-items-start p-3 pb-1">
                  <div className="d-flex gap-2">
                    <Link to={`/profile/${autoreDelPost._id}`}>
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
                    </Link>

                    <div className="d-flex flex-column">
                      <Link
                        to={`/profile/${autoreDelPost._id}`}
                        className="text-decoration-none"
                      >
                        <h6 className="fw-bold mb-0 text-dark small">
                          {post.username}
                        </h6>
                      </Link>

                      <small className="text-secondary">
                        {autoreDelPost?.title || "Membro LinkedIn"}
                      </small>

                      <small className="text-secondary mt-1">
                        {new Date(post.createdAt).toLocaleDateString()} • 🌐
                      </small>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    {isMioPost && (
                      <>
                        <Button
                          variant="link"
                          className="text-secondary p-1 border-0"
                          onClick={() => {
                            setPostIdInModifica(post._id);
                            setTestoPostInModifica(post.text);
                          }}
                        >
                          <Pencil size={16} />
                        </Button>

                        <Button
                          variant="link"
                          className="text-secondary p-1 border-0"
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

                    <Button
                      variant="link"
                      className="text-secondary p-1 border-0"
                      onClick={() => nascondiPostDalloSchermo(post._id)}
                    >
                      <XLg size={18} />
                    </Button>
                  </div>
                </div>

                {/* TESTO */}
                {postIdInModifica === post._id ? (
                  <div className="px-3 my-2">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={testoPostInModifica}
                      onChange={(e) => setTestoPostInModifica(e.target.value)}
                    />

                    <div className="d-flex gap-2 mt-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          dispatch(
                            modificaPostServer(post._id, testoPostInModifica),
                          );

                          setPostIdInModifica(null);
                        }}
                      >
                        Salva
                      </Button>

                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setPostIdInModifica(null)}
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

                {/* FOTO */}
                {post.image && (
                  <div className="w-100 text-center border-top border-bottom">
                    <img
                      src={post.image}
                      alt="post"
                      className="img-fluid"
                      style={{
                        maxHeight: "500px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}

                {/* LIKE INFO */}
                {miPiace && (
                  <div className="px-3 pb-2 text-secondary d-flex align-items-center gap-1">
                    <HeartFill size={12} color="#df704d" />

                    <span>
                      Consigliato da {mioProfilo?.name} {mioProfilo?.surname}
                    </span>
                  </div>
                )}

                {/* BOTTONI */}
                <div className="d-flex gap-1 border-top pt-1 pb-1 px-2 mx-2">
                  <Button
                    variant="transparent"
                    className={`flex-grow-1 border-0 ${
                      miPiace ? "text-danger" : "text-secondary"
                    }`}
                    onClick={() => mettiMiPiace(post._id)}
                  >
                    {miPiace ? <HeartFill size={18} /> : <Heart size={18} />}

                    <span className="ms-2">Consiglia</span>
                  </Button>

                  <Button
                    variant="transparent"
                    className="text-secondary flex-grow-1 border-0"
                    onClick={() => toggleCommenti(post._id)}
                  >
                    <Chat size={18} />

                    <span className="ms-2">Commenta</span>
                  </Button>
                </div>

                {/* COMMENTI */}
                {mostraCommenti && (
                  <div className="px-3 pb-3 pt-2 bg-light border-top rounded-bottom-3">
                    {/* INPUT COMMENTO */}
                    <div className="d-flex gap-2 mt-2 align-items-start mb-3">
                      <Link
                        to={`/profile/${mioProfilo._id}`}
                        className="text-decoration-none"
                      >
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
                          <PersonFill
                            size={40}
                            className="text-secondary mt-1"
                          />
                        )}
                      </Link>

                      <div className="flex-grow-1 w-100">
                        <Form.Control
                          as="textarea"
                          rows={1}
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
                            className="mt-2"
                            size="sm"
                            onClick={() => inviaCommento(post._id)}
                          >
                            Pubblica
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* LISTA COMMENTI */}
                    {commentiDiQuestoPost
                      .slice(-5)
                      .reverse()
                      .map((comm) => {
                        const mioNomeCompleto = `${mioProfilo?.name} ${mioProfilo?.surname}`;

                        const isMioCommento =
                          comm.author === mioProfilo?.username ||
                          comm.author === mioProfilo?.email ||
                          comm.author === mioNomeCompleto;

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
                            {comm.fotoFinta ? (
                              <Link
                                to={`/profile/${utenteCheHaCommentato._id}`}
                                className="text-decoration-none"
                              >
                                <img
                                  src={comm.fotoFinta}
                                  alt="commento"
                                  className="rounded-circle"
                                  width={35}
                                  height={35}
                                />
                              </Link>
                            ) : utenteCheHaCommentato?.image ? (
                              <Link
                                to={`/profile/${utenteCheHaCommentato._id}`}
                                className="text-decoration-none"
                              >
                                <img
                                  src={utenteCheHaCommentato.image}
                                  alt="commento"
                                  className="rounded-circle"
                                  width={35}
                                  height={35}
                                />
                              </Link>
                            ) : (
                              <PersonFill
                                size={35}
                                className="text-secondary"
                              />
                            )}

                            <div className="bg-white px-3 py-2 rounded-3 border w-100 d-flex justify-content-between align-items-start">
                              <div className="flex-grow-1">
                                <div className="fw-semibold text-dark small">
                                  {comm.author}
                                </div>

                                {commentIdInModifica === comm._id ? (
                                  <>
                                    <Form.Control
                                      type="text"
                                      value={testoCommentoInModifica}
                                      onChange={(e) =>
                                        setTestoCommentoInModifica(
                                          e.target.value,
                                        )
                                      }
                                    />

                                    <div className="d-flex gap-2 mt-2">
                                      <Button
                                        size="sm"
                                        onClick={() => {
                                          dispatch(
                                            modificaCommentoServer(
                                              comm._id,
                                              testoCommentoInModifica,
                                              post._id,
                                            ),
                                          );

                                          setCommentIdInModifica(null);
                                        }}
                                      >
                                        Salva
                                      </Button>

                                      <Button
                                        size="sm"
                                        variant="secondary"
                                        onClick={() =>
                                          setCommentIdInModifica(null)
                                        }
                                      >
                                        Annulla
                                      </Button>
                                    </div>
                                  </>
                                ) : (
                                  <div className="text-dark small">
                                    {comm.comment}
                                  </div>
                                )}

                                <Button
                                  variant="link"
                                  className="p-0 border-0 mt-1 text-decoration-none"
                                  onClick={() => mettiMiPiaceCommento(comm._id)}
                                >
                                  {commentiPiaciuti[comm._id] ? (
                                    <HeartFill
                                      size={14}
                                      className="text-danger"
                                    />
                                  ) : (
                                    <Heart
                                      size={14}
                                      className="text-secondary"
                                    />
                                  )}
                                </Button>
                              </div>

                              {isMioCommento && (
                                <div className="d-flex gap-1">
                                  <Button
                                    variant="link"
                                    className="text-secondary p-1"
                                    onClick={() => {
                                      setCommentIdInModifica(comm._id);

                                      setTestoCommentoInModifica(comm.comment);
                                    }}
                                  >
                                    <Pencil size={14} />
                                  </Button>

                                  <Button
                                    variant="link"
                                    className="text-danger p-1"
                                    onClick={() => {
                                      if (
                                        window.confirm(
                                          "Vuoi eliminare questo commento?",
                                        )
                                      ) {
                                        dispatch(
                                          eliminaCommentoServer(comm._id),
                                        );
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
      </InfiniteScroll>
    </div>
  );
};

export default PostsList;
