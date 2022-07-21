import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  search: string;
}

const initialState: SearchState = { search: '' };

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { onSearch } = searchSlice.actions;
export default searchSlice.reducer;
