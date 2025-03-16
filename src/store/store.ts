import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from '../slices/userSlice';
import {
  useSelector as selec,
  useDispatch as disp,
  TypedUseSelectorHook,
} from 'react-redux';
import { MSGReducer } from '../slices/msgSlice';
import { ProfileReducer } from '@/slices/profileSlice';

const rootSlice = {
  profile: ProfileReducer,
  user: UserReducer,
  msg: MSGReducer,
};

export const store = configureStore({
  reducer: rootSlice,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useDispatch: () => AppDispatch = () => disp();
export const useSelector: TypedUseSelectorHook<RootState> = selec;
