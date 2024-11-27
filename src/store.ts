import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/booksSlice'; // Remplacez par votre slice

const store = configureStore({
  reducer: {
    books: booksReducer,// Ajoutez vos slices ici
  },
});

// Type pour le store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;