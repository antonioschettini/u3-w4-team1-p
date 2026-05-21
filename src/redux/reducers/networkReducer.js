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
      state.followed = [...state.followed, action.payload];
      state.loading = false;
    },
    removeFollowed: (state, action) => {
      state.followed = state.followed.filter(
        (user) => user._id !== action.payload._id,
      );
      state.loading = false;
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

export const { salvaFollowed, loadingNetwork, erroreNetwork, removeFollowed } =
  networkSlice.actions;
export default networkSlice.reducer;
