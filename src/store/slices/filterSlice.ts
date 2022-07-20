import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  rating?: number;
  selectedGenres: {
    [id: number]: boolean;
  };
}

const initialState: FilterState = { selectedGenres: {} };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeRating(state, action: PayloadAction<number>) {
      state.rating = state.rating === action.payload ? undefined : action.payload;
    },
    toggleGenre(state, action: PayloadAction<number>) {
      const genreId = action.payload;
      state.selectedGenres[genreId] = !state.selectedGenres[genreId];
    },
  },
});

export const { changeRating, toggleGenre } = filterSlice.actions;
export default filterSlice.reducer;
