import { combineReducers, configureStore, Selector } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper, MakeStore } from 'next-redux-wrapper';

import { api } from "./api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: [],
  whitelist: ["auth"],
};
//   const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     blacklist: ['isLoggingIn']
//   };

const generateStore = () => {
  //   if (typeof window === "undefined") {
  //     const store = configureStore({
  //       reducer: rootReducer,
  //       middleware: (getDefaultMiddleware) =>
  //         getDefaultMiddleware({
  //           serializableCheck: false,
  //         }).concat(api.middleware),
  //     });
  //     setupListeners(store.dispatch);
  //     return store;
  //   }

  const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
  }); // Creating the store again

  setupListeners(store.dispatch);

  (store as unknown as { __persistor: Persistor }).__persistor =
    persistStore(store);

  return store;
};

export const store = generateStore();

//export type StoreState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper<typeof store>(generateStore as MakeStore<typeof store>, { debug: false });