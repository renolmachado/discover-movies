import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../models/movie';

interface MyListState {
  moviesMap: {
    [movieId: number]: Movie;
  };
}

const initialState: MyListState = { moviesMap: {} };

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
      const isAlreadyAdded = !!state.moviesMap[movie.id];
      if (!isAlreadyAdded) {
        state.moviesMap[movie.id] = movie;
      }
    },
  },
});

export const { addMovie } = myListSlice.actions;
export default myListSlice.reducer;
