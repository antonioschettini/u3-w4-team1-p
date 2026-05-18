import { createSlice } from "@reduxjs/toolkit"; // create slice fa in un colpo solo azioni e modifiche all ostato

// setto lo stato iniziale all'avvio
const initialState = {
  mioProfilo: null,
  usersData: null,
  loadingProfilo: true, // se in futuro vogliamo inserire le logiche di errore e caricamento
  loadingUsers: true, // se in futuro vogliamo inserire le logiche di errore e caricamento
  error: null,
};

// creazione dello slice
const profiloSlice = createSlice({
  name: "profilo", // nome della slice
  initialState,
  reducers: {
    // si avvia il reducers quando i dati arrivano con successo
    salvaProfilo: (state, action) => {
      state.mioProfilo = action.payload;
      state.loadingProfilo = false;
      state.error = null;
    },
    saveUsersData: (state, action) => {
      state.usersData = action.payload;
      state.loadingUsers = false;
    },
  },
});

// esporto le azioni generate da createslice
export const { salvaProfilo, saveUsersData } = profiloSlice.actions;

//esporto il reducer
export default profiloSlice.reducer;
