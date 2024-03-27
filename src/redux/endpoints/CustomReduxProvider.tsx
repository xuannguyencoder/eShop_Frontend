import { PersistGate } from 'redux-persist/integration/react';
import { Persistor} from 'redux-persist';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';

const CustomReduxProvider = ({ children, store }: { children: JSX.Element; store: Store }) => {
//   if (typeof window === 'undefined') {
//     return <Provider store={store}>{children}</Provider>;
//   }
  return (
    <Provider store={store}>
      <PersistGate persistor={(store as unknown as { __persistor: Persistor }).__persistor}>
        {() => children}
      </PersistGate>
    </Provider>
  );
};

export default CustomReduxProvider;