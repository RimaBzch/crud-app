import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware]),
});
