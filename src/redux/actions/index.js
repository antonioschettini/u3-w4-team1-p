import { salvaProfilo } from "../reducers";

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
        dispatch(salvaProfilo(datiProfilo))
        console.log(datiProfilo);
      } else {
        throw new Error("impossibile scarica profilo");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
