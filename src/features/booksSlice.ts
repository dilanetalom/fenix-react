import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks } from '../service/bookservice'; // Importer le service

interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    // Ajoutez d'autres champs selon votre modèle
}

interface BooksState {
    books: Book[];
    loading: boolean;
    error: string | null;
}

const initialState: BooksState = {
    books: [],
    loading: false,
    error: null,
};

// Créer un thunk pour récupérer les livres
export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
    const response = await getAllBooks();
    return response; // Cela sera automatiquement dispatché comme payload
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooksAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooksAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload; // Met à jour les livres
            })
            .addCase(fetchBooksAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

// Exporter le reducer
export default booksSlice.reducer;