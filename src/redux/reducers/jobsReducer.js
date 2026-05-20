import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
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
    loadingJobs: (state) => {
      state.loading = true;
    },
    erroreJobs: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { salvaJobs, loadingJobs, erroreJobs } = jobsSlice.actions;
export default jobsSlice.reducer;