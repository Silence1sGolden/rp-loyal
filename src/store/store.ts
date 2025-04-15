import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from '../slices/userSlice';
import {
  useSelector as selec,
  useDispatch as disp,
  TypedUseSelectorHook,
} from 'react-redux';
import { RolesReducer } from '../slices/rolesSlice';
import { ProfileReducer } from '@/slices/profileSlice';
import { SearchReducer } from '@/slices/searchSlice';

const rootSlice = {
  profile: ProfileReducer,
  user: UserReducer,
  roles: RolesReducer,
  search: SearchReducer,
};

export const store = configureStore({
  reducer: rootSlice,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useDispatch: () => AppDispatch = () => disp();
export const useSelector: TypedUseSelectorHook<RootState> = selec;
