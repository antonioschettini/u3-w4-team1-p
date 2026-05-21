import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// Questo oggetto serve a bypassare i problemi di importazione dello storage
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

// Import dei reducer
import profiloReducer from "../reducers";
import jobsReducer from "../reducers/jobsReducer";
import authReducer from "../reducers/authReducer";
import networkReducer from "../reducers/networkReducer";

// Configurazione persistenza
const persistConfig = {
  key: "root",
  storage, 
};

// Combinazione di tutti i reducer in un unico rootReducer
const rootReducer = combineReducers({
  profilo: profiloReducer,
  jobs: jobsReducer,
  auth: authReducer,
  network: networkReducer,
});

// Creazione della versione persistente del reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creazione dello store finale
export const store = configureStore({
  reducer: persistedReducer,
  // Middleware per gestire il serializableCheck con redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Il persistor serve a gestire il salvataggio automatico
export const persistor = persistStore(store);

export default store;
