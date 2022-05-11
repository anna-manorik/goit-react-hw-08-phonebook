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
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { usersApi } from './auth/authApi';
import authReducer from './auth/auth-slice';
import { contactsApi } from './phonebook/phonebookApi';
import { filterReducer } from './phonebook/phonebook-reducer';

const reducers = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  auth: authReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  filterReducer: filterReducer,
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(authPersistConfig, reducers);

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
    filterReducer: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(usersApi.middleware)
      .concat(contactsApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
