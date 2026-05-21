import {
  salvaProfilo,
  saveUsersData,
  erroreProfilo,
  avviaCaricamentoPost,
  salvaPost,
  errorePost,
  salvaCommento,
} from "../reducers";

// Token di autenticazione
export const mioToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";

const tokenCommenti =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBkOTNhZTNhMDNhODAwMTUwZDk0MTUiLCJpYXQiOjE3NzkyNzQ2NzAsImV4cCI6MTc4MDQ4NDI3MH0.-_CZSFV3Ice0N3LfbMDLZ8jWjsqPPYWI0w81F66CJwg";

export const profileApiLink =
  "https://striveschool-api.herokuapp.com/api/profile/";

// --- FUNZIONI PROFILO ---

export const fetchMioProfilo = () => {
  // scarica i dati del mio profilo
  return async (dispatch) => {
    try {
      const risposta = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${mioToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (risposta.ok) {
        const datiProfilo = await risposta.json();
        dispatch(salvaProfilo(datiProfilo));
      } else {
        throw new Error("impossibile scaricare profilo");
      }
    } catch (error) {
      dispatch(erroreProfilo("Impossibile caricare il profilo.", error));
    }
  };
};

export const fetchSavedProfiles = () => {
  // prende tutti gli altri profili utenti
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${mioToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(saveUsersData(data));
      } else {
        throw new Error("Error fetching people's data.");
      }
    } catch (error) {
      dispatch(
        erroreProfilo("Errore nel caricamento della lista dei profili.", error),
      );
    }
  };
};

export const postNewExperience = async (formData, userId) => {
  // salva una nuova esperienza nel profilo
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${mioToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );
    if (!response.ok) throw new Error("Error posting new experience.");
  } catch (error) {
    console.log(error);
  }
};

// --- FUNZIONI POST ---

export const fetchPosts = () => {
  // prende gli ultimi post dal server
  return async (dispatch) => {
    try {
      dispatch(avviaCaricamentoPost());
      const risposta = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${mioToken}` },
        },
      );
      if (risposta.ok) {
        const dati = await risposta.json();
        const postRecenti = dati.reverse().slice(0, 50);
        dispatch(salvaPost(postRecenti));
      } else {
        throw new Error("Impossibile scaricare i post dal server.!");
      }
    } catch (error) {
      dispatch(errorePost(error.message));
    }
  };
};

export const creaNuovoPost = (testo, immagineFile) => {
  // pubblica un nuovo post con o senza foto
  return async (dispatch) => {
    try {
      const rispostaTesto = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${mioToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: testo }),
        },
      );

      if (rispostaTesto.ok) {
        const postCreato = await rispostaTesto.json();
        if (immagineFile) {
          const formData = new FormData();
          formData.append("post", immagineFile);
          await fetch(
            `https://striveschool-api.herokuapp.com/api/posts/${postCreato._id}`,
            {
              method: "POST",
              headers: { Authorization: `Bearer ${mioToken}` },
              body: formData,
            },
          );
        }
        dispatch(fetchPosts());
      }
    } catch (errore) {
      console.log("Errore nella creazione del post:", errore);
    }
  };
};

export const deletePost = (postId) => {
  // cancella un post tramite id
  return async (dispatch) => {
    try {
      const risposta = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${mioToken}` },
        },
      );
      if (risposta.ok) {
        alert("Post eliminato con successo!");
        dispatch(fetchPosts());
      } else {
        alert("Non puoi eliminare i post degli altri utenti!");
      }
    } catch (errore) {
      console.log("Errore durante la cancellazione:", errore);
    }
  };
};

// --- FUNZIONI COMMENTI ---

export const fetchCommenti = () => {
  // scarica tutti i commenti esistenti
  return async (dispatch) => {
    try {
      const risposta = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${tokenCommenti}` },
        },
      );
      if (risposta.ok) {
        const dati = await risposta.json();
        dispatch(salvaCommento(dati));
      }
    } catch (errore) {
      console.log("Errore durante il download dei commenti:", errore);
    }
  };
};

export const aggiungiCommentoServer = (testoCommento, postId) => {
  // aggiunge un nuovo commento a un post
  return async (dispatch) => {
    try {
      const risposta = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${tokenCommenti}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: testoCommento,
            rate: "5",
            elementId: postId,
          }),
        },
      );
      if (risposta.ok) {
        dispatch(fetchCommenti());
      }
    } catch (errore) {
      console.log("Errore commento:", errore);
    }
  };
};

export const eliminaCommentoServer = (commentId) => {
  // cancella un commento tramite id
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${tokenCommenti}`,
          },
        },
      );
      if (response.ok) {
        dispatch(fetchCommenti());
      } else {
        throw new Error("Errore durante l'eliminazione");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// --- FUNZIONE JOBS ---

import { salvaJobs, loadingJobs } from "../reducers/jobsReducer";
import { removeFollowed, salvaFollowed } from "../reducers/networkReducer";

export const fetchJobs = (query = "") => {
  // cerca e scarica i posti di lavoro
  return async (dispatch) => {
    try {
      dispatch(loadingJobs());
      const risposta = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs${query ? `?search=${query}` : ""}`,
      );
      if (risposta.ok) {
        const dati = await risposta.json();
        dispatch(salvaJobs(dati.data.filter((job) => job.company_logo_url)));
      } else {
        throw new Error("Impossibile caricare i jobs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const modificaPostServer = (postId, nuovoTesto) => {
  // modifica il testo di un post
  return async (dispatch) => {
    try {
      const risposta = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${mioToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: nuovoTesto }),
        },
      );

      if (risposta.ok) {
        dispatch(fetchPosts());
      } else {
        alert("Non puoi modificare i post degli altri utenti!");
      }
    } catch (errore) {
      console.log("Errore nella modifica del post:", errore);
    }
  };
};

export const modificaCommentoServer = (commentId, nuovoTesto, postId) => {
  // modifica il testo di un commento
  return async (dispatch) => {
    try {
      const risposta = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${tokenCommenti}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: nuovoTesto,
            rate: "5",
            elementId: postId,
          }),
        },
      );

      if (risposta.ok) {
        dispatch(fetchCommenti());
      }
    } catch (errore) {
      console.log("Errore nella modifica del commento:", errore);
    }
  };
};

// Bell audio action!

const bell = new Audio("/Bell-Sound.mp3");

export const playBell = () => bell.play();

// Funzioni Network

export const followUser = (user) => {
  return (dispatch) => {
    dispatch(salvaFollowed(user));
    playBell();
  };
};
export const removeUser = (user) => {
  return (dispatch) => {
    dispatch(removeFollowed(user));
    alert(`${user.name} ${user.surname} rimosso dalla tua rete.`);
  };
};
