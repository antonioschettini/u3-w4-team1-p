import {
  salvaProfilo,
  saveUsersData,
  erroreProfilo,
  avviaCaricamentoPost,
  salvaPost,
  errorePost,
  salvaCommento,
} from "../reducers";
import { salvaJobs } from "../reducers/jobsReducer";

// Token di autenticazione
const mioToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";

const tokenCommenti =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBkOTNhZTNhMDNhODAwMTUwZDk0MTUiLCJpYXQiOjE3NzkyNzQ2NzAsImV4cCI6MTc4MDQ4NDI3MH0.-_CZSFV3Ice0N3LfbMDLZ8jWjsqPPYWI0w81F66CJwg";

export const profileApiLink =
  "https://striveschool-api.herokuapp.com/api/profile/";

// --- FUNZIONI PROFILO ---
export const fetchMioProfilo = () => {
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
        // Dopo aver eliminato, ricarichiamo i commenti per aggiornare la lista
        dispatch(fetchCommenti());
      } else {
        throw new Error("Errore durante l'eliminazione");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// --- FUNZIONI JOBS ---
export const fetchJobs = (query = "") => {
  return async (dispatch) => {
    try {
      const risposta = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs${query ? `?search=${query}` : ""}`,
        { method: "GET" },
      );
      if (risposta.ok) {
        const dati = await risposta.json();
        dispatch(salvaJobs(dati));
      } else {
        throw new Error("Impossibile caricare i jobs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const modificaPostServer = (postId, nuovoTesto) => {
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
          body: JSON.stringify({ text: nuovoTesto }), // Inviamo il testo modificato
        },
      );

      if (risposta.ok) {
        // Se il server dice di sì, ricarichiamo la lista dei post aggiornata
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
            elementId: postId, // Il server vuole sapere a quale post appartiene
          }),
        },
      );

      if (risposta.ok) {
        // Se il server dice di sì, ricarichiamo la lista dei commenti
        dispatch(fetchCommenti());
      }
    } catch (errore) {
      console.log("Errore nella modifica del commento:", errore);
    }
  };
};
