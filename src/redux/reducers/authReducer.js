import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    utenteRegistrato: null,
    isAuthenticated: false,
  },
  reducers: {
    registraUtente: (state, action) => {
      state.utenteRegistrato = action.payload;
    },
    effettuaLogin: (state) => {
      state.isAuthenticated = true;
    },
    effettuaLogout: (state) => {
      state.isAuthenticated = false;
      state.utenteRegistrato = null; //cancella anche l'utente al logout
    },
  },
});

export const { registraUtente, effettuaLogin, effettuaLogout } =
  authSlice.actions;
export default authSlice.reducer;
