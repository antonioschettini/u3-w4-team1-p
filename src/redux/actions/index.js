import {
  salvaProfilo,
  saveUsersData,
  erroreProfilo,
  avviaCaricamentoPost,
  salvaPost,
  errorePost,
  salvaCommento,
} from "../reducers";

const mioToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";

const tokenCommenti =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBkOTNhZTNhMDNhODAwMTUwZDk0MTUiLCJpYXQiOjE3NzkyNzQ2NzAsImV4cCI6MTc4MDQ4NDI3MH0.-_CZSFV3Ice0N3LfbMDLZ8jWjsqPPYWI0w81F66CJwg";

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
        // spedisco i dati usando l'azione della slice con dispatch
        dispatch(salvaProfilo(datiProfilo));
        console.log(datiProfilo);
      } else {
        throw new Error("impossibile scarica profilo");
      }
    } catch (error) {
      console.log(error);
      dispatch(
        erroreProfilo(
          "Impossibile caricare il profilo. Il server potrebbe essere temporaneamente non raggiungibile.",
        ),
      );
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
        // spedisco i dati usando l'azione della slice con dispatch
        dispatch(saveUsersData(data));
        console.log(data);
      } else {
        throw new Error("Error fetching people's data.");
      }
    } catch (error) {
      console.log(error);
      dispatch(
        erroreProfilo("Errore nel caricamento della lista dei profili."),
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
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Error posting new experience.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      // dispatcho il caricamento
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
        // effetto un reverse per invertire l'array e prendo i primi 50 (gli ultimi aggiunti)
        const postRecenti = dati.reverse().slice(0, 50);
        // invio l'array nello stato globale di Redux
        dispatch(salvaPost(postRecenti));
      } else {
        throw new Error("Impossibile scaricare i post dal server.!");
      }
    } catch (error) {
      console.log(error);
      dispatch(errorePost(error.message));
    }
  };
};

// funzione per creare un post con o senza immagine
export const creaNuovoPost = (testo, immagineFile) => {
  return async (dispatch) => {
    try {
      // Prima creiamo il post solo con il testo
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

        // Se abbiamo scelto un'immagine, la inviamo collegandola al post appena creato
        if (immagineFile) {
          const formData = new FormData();
          formData.append("post", immagineFile); // Il server si aspetta che la foto si chiami "post"

          await fetch(
            `https://striveschool-api.herokuapp.com/api/posts/${postCreato._id}`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${mioToken}`,
              },
              body: formData,
            },
          );
        }

        // diciamo a Redux di riscaricare la lista aggiornata
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
        // Dopo aver eliminato, rinfreschiamo subito la lista chiamando la GET di sopra
        dispatch(fetchPosts());
      } else {
        alert("Non puoi eliminare i post degli altri utenti!");
      }
    } catch (errore) {
      console.log("Errore durante la cancellazione:", errore);
    }
  };
};

// Funzione per scaricare tutti i commenti dal server
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
        dispatch(salvaCommento(dati)); // Mandiamo i commenti nell 'array
      }
    } catch (errore) {
      console.log("Errore durante il download dei commenti:", errore);
    }
  };
};

// Funzione per aggiungere un commento
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
        alert("Commento pubblicato!");
        // refresho dopo aver inserito un commento
        dispatch(fetchCommenti());
      } else {
        alert("Errore: controlla se il token dei commenti è scaduto!");
      }
    } catch (errore) {
      console.log("Errore commento:", errore);
    }
  };
};
