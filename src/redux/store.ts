import { combineReducers, configureStore, Selector } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import { api } from "./api";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["auth"],
};
//   const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     blacklist: ['isLoggingIn']
//   };

const generateStore = () => {
    if (typeof window === "undefined") {
      const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          }).concat(api.middleware),
      });

      setupListeners(store.dispatch);
      return store;
    }else{
      const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

      const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          }).concat(api.middleware),
      }); // Creating the store again
    
      setupListeners(store.dispatch);
      (store as unknown as { __persistor: Persistor }).__persistor = persistStore(store);
      return store;
    }
};

export const store = generateStore();
//export const wrapper = createWrapper<typeof store>(generateStore as MakeStore<typeof store>, { debug: false });