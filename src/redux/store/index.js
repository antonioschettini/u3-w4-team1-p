import { configureStore } from "@reduxjs/toolkit";
import profiloReducer from "../reducers";
import jobsReducer from "../reducers/jobsReducer"

const store = configureStore({
  reducer: {
    // Assegniamo un nome alla nostra fetta di stato
    profilo: profiloReducer,
    jobs: jobsReducer,
  }
});

export default store;
