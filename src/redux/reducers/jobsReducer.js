import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  followedJobs: [], // i lavori seguiti
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    salvaJobs: (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
    },

    // --- AZIONI PER LE NOTIFICHE AL SEGUI JOB DA PROFILO ---
    salvaFollowedJob: (state, action) => {
      const newJob = {
        ...action.payload,
        isRead: false,
        createdAt: new Date().toISOString(), // Salviamo l'orario del click
      };
      const listaSicura = Array.isArray(state.followedJobs)
        ? state.followedJobs
        : [];
      state.followedJobs = [...listaSicura, newJob];
    },

    // Segna come letta e la rimuove dall'elenco
    removeJobNotification: (state, action) => {
      const jobIndex = state.followedJobs.findIndex(
        (job) => job._id === action.payload,
      );
      if (jobIndex !== -1) {
        state.followedJobs[jobIndex].isRead = true;
      }
      state.followedJobs = state.followedJobs.filter(
        (job) => job._id !== action.payload,
      );
    },

    // Segna solo come letta quando clicchiamo sulla riga
    markJobAsRead: (state, action) => {
      const jobIndex = state.followedJobs.findIndex(
        (job) => job._id === action.payload,
      );
      if (jobIndex !== -1) {
        state.followedJobs[jobIndex].isRead = true;
      }
    },

    loadingJobs: (state) => {
      state.loading = true;
    },
    erroreJobs: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  salvaJobs,
  loadingJobs,
  erroreJobs,
  salvaFollowedJob,
  removeJobNotification,
  markJobAsRead,
} = jobsSlice.actions;

export default jobsSlice.reducer;
