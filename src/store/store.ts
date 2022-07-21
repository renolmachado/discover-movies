import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filterSliceReducer from './slices/filterSlice';
import searchSliceReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    filter: filterSliceReducer,
    search: searchSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
