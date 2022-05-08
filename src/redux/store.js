import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { usersApi } from './auth/auth-operations';
import { contactsReducer } from './phonebook';


const reducers = combineReducers({
  contactsReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

const authPersistConfig = {
  key: 'root',
  storage,
  timeout: null,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      usersApi.middleware,
    ),
});


export const persistor = persistStore(store);


// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { usersApi } from './auth/auth-operations';
// import contactsReducer from './phonebook/phonebook-reducer';

// export const store = configureStore({
//   reducer: {
//     [usersApi.reducerPath]: usersApi.reducer,
//     // contacts: contactsReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(usersApi.middleware),
// });

// setupListeners(store.dispatch);
