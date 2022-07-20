import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  rating?: number;
}

const initialState: FilterState = {};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeRanking(state, action: PayloadAction<number>) {
      state.rating = state.rating === action.payload ? undefined : action.payload;
    },
  },
});

export const { changeRanking: changeRating } = filterSlice.actions;
export default filterSlice.reducer;
