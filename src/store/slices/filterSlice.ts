import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  search: string;
  rating?: number;
  selectedGenres: {
    [id: number]: boolean;
  };
  page: number;
}

const initialState: FilterState = { selectedGenres: {}, search: '', page: 1 };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeRating(state, action: PayloadAction<number>) {
      state.page = 1;
      state.rating = state.rating === action.payload ? undefined : action.payload;
    },
    toggleGenre(state, action: PayloadAction<number>) {
      const genreId = action.payload;
      state.page = 1;
      state.selectedGenres[genreId] = !state.selectedGenres[genreId];
    },
    onSearch(state, action: PayloadAction<string>) {
      if (state.search !== action.payload) {
        state.page = 1;
      }

      state.search = action.payload;
    },
    onNext(state) {
      state.page++;
    },
    onPrevious(state) {
      if (state.page > 1) {
        state.page--;
      }
    },
  },
});

export const { changeRating, toggleGenre, onSearch, onNext, onPrevious } = filterSlice.actions;
export default filterSlice.reducer;
