import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followed: [],
  loading: false,
  error: null,
};

const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    salvaFollowed: (state, action) => {
      const newUser = {
        ...action.payload,
        isRead: false,
        createdAt: new Date().toISOString(),
      };
      state.followed = [...state.followed, newUser];
      state.loading = false;
    },

    // Segna come letta e rimuove la notifica dallo store
    removeNotification: (state, action) => {
      // Troviamo la notifica e la segnamo come letta e svuota il contatore badge
      const userIndex = state.followed.findIndex(
        (user) => user._id === action.payload,
      );
      if (userIndex !== -1) {
        state.followed[userIndex].isRead = true;
      }
      // Rimuoviamo la notifica dall'array
      state.followed = state.followed.filter(
        (user) => user._id !== action.payload,
      );
      state.loading = false;
    },

    removeFollowed: (state, action) => {
      const targetId =
        action.payload && action.payload._id
          ? action.payload._id
          : action.payload;
      state.followed = state.followed.filter((user) => user._id !== targetId);
      state.loading = false;
    },

    markAsRead: (state, action) => {
      const userIndex = state.followed.findIndex(
        (user) => user._id === action.payload,
      );
      if (userIndex !== -1) {
        state.followed[userIndex].isRead = true;
      }
    },
    loadingNetwork: (state) => {
      state.loading = true;
    },
    erroreNetwork: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  salvaFollowed,
  removeNotification,
  removeFollowed,
  markAsRead,
  loadingNetwork,
  erroreNetwork,
} = networkSlice.actions;

export default networkSlice.reducer;
