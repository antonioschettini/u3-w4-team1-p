import { configureStore } from "@reduxjs/toolkit";
import profiloReducer from "../reducers";

const store = configureStore({
  reducer: {
    // Assegniamo un nome alla nostra fetta di stato
    profilo: profiloReducer
  }
});

export default store;