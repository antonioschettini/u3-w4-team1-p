import { createSlice } from "@reduxjs/toolkit"; // create slice fa in un colpo solo azioni e modifiche all ostato

// setto lo stato iniziale all'avvio
const initialState = {
  mioProfilo: null,
  usersData: null,
  loadingProfilo: false, // se in futuro vogliamo inserire le logiche di errore e caricamento
  loadingUsers: false, // se in futuro vogliamo inserire le logiche di errore e caricamento
  error: null,
  listaPost: [],
  loadingPost: false,
  errorPost: null,
  listaCommenti: [],
};

// creazione dello slice
const profiloSlice = createSlice({
  name: "profilo", // nome della slice
  initialState,
  reducers: {
    // avvia caricamento profilo
    avviaCaricamentoProfilo: (state) => {
      state.loadingProfilo = true;
      state.error = null; // Cancelliamo vecchi errori
    },
    // si avvia il reducers quando i dati arrivano con successo
    salvaProfilo: (state, action) => {
      state.mioProfilo = action.payload;
      state.loadingProfilo = false;
      state.error = null;
    },
    // Azione per quando c'è un ERRORE
    erroreProfilo: (state, action) => {
      state.error = action.payload; // Salviamo il testo dell'errore
      state.loadingProfilo = false; // Spegniamo il caricamento perché è fallito
    },
    saveUsersData: (state, action) => {
      state.usersData = action.payload;
      state.loadingUsers = false;
    },
    // Azioni per i post
    avviaCaricamentoPost: (state) => {
      state.loadingPost = true;
      state.errorPost = null; // Cancella vecchi errori se presenti
    },
    // Prende i post arrivati dal server e li salva nella listaPost
    salvaPost: (state, action) => {
      state.listaPost = action.payload;
      state.loadingPost = false; // Spegne la rotella di caricamento
      state.errorPost = null;
    },
    // Se il server si rompe salva il messaggio d'errore
    errorePost: (state, action) => {
      state.errorPost = action.payload;
      state.loadingPost = false; // Spegne la rotella anche in caso di fallimento
    },
    // salva i commenti nella listacommenti
    salvaCommento: (state, action) => {
      state.listaCommenti = action.payload;
    },
  },
});

// esporto le azioni generate da createslice
export const {
  avviaCaricamentoProfilo,
  salvaProfilo,
  erroreProfilo,
  saveUsersData,
  avviaCaricamentoPost,
  salvaPost,
  errorePost,
  salvaCommento,
} = profiloSlice.actions;

//esporto il reducer
export default profiloSlice.reducer;
