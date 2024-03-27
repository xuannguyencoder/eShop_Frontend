"use client"
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, persistReducer, persistStore } from "redux-persist";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const CustomReduxProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={(store as unknown as { __persistor: Persistor }).__persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default CustomReduxProvider;