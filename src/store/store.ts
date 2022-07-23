import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filterSliceReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    filter: filterSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
