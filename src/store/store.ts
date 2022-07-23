import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filterSliceReducer from './slices/filterSlice';
import myListSliceReducer from './slices/myListSlice';

const store = configureStore({
  reducer: {
    filter: filterSliceReducer,
    myList: myListSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
