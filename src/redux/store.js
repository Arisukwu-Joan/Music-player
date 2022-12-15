import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './Services/ShazamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
