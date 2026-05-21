import { configureStore } from "@reduxjs/toolkit";
import profiloReducer from "../reducers";
import jobsReducer from "../reducers/jobsReducer";
import networkReducer from "../reducers/networkReducer";
const store = configureStore({
  reducer: {
    // Assegniamo un nome alla nostra fetta di stato
    profilo: profiloReducer,
    jobs: jobsReducer,
    network: networkReducer,
  },
});

export default store;
