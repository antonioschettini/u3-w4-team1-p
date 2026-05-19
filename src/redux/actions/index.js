import { salvaProfilo, saveUsersData, erroreProfilo } from "../reducers";

export const fetchMioProfilo = () => {
  return async (dispatch) => {
    const mioToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";
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
    const mioToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZmJlOTA2YmJlOTAwMTVkZWU1ODkiLCJpYXQiOjE3NzkxMDQ3NDUsImV4cCI6MTc4MDMxNDM0NX0.y_AsSTFGDVHHKzFcG1UcauQLKYR-Fx7Fxua5IIxLyTQ";
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
