import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// questo oggetto serve a bypassare i casini con l'importazione standard dello storage.
// costruisco ponte tra il codice e il browser
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

import profiloReducer from "../reducers";
import jobsReducer from "../reducers/jobsReducer";
import authReducer from "../reducers/authReducer";

// setto persist per come deve comportarsi
const persistConfig = {
  key: "root",
  storage, // usiamo l'oggetto creato da noi
};

// inisco tutti i reducer con combinereducers
const rootReducer = combineReducers({
  profilo: profiloReducer,
  jobs: jobsReducer,
  auth: authReducer,
});

// creiamo la versione persistente del reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creiamo lo store finale
export const store = configureStore({
  reducer: persistedReducer,
  // questo middleware serve a non far impazzire redux con i dati salvati
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// il persistor serve a gestire il salvataggio automatico
export const persistor = persistStore(store);
export default store;
