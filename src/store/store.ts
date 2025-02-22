import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from '../slices/userSlice';
import {
  useSelector as selec,
  useDispatch as disp,
  TypedUseSelectorHook,
} from 'react-redux';

const rootSlice = {
  user: UserReducer,
};

export const store = configureStore({
  reducer: rootSlice,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useDispatch: () => AppDispatch = () => disp();
export const useSelector: TypedUseSelectorHook<RootState> = selec;
