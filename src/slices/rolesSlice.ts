import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { getRolesApi, getMessagesApi } from '../utils/multi-api';
<<<<<<< HEAD
import {
  TMessagesResponse,
  TResponse,
  TRoles,
  TRolesResponse,
} from '@/utils/types';
=======
=======
import { getRolesApi, getMessagesApi } from '../api/royal-api';
>>>>>>> 4917dec (фикс store и слайсов)
import { TMessage, TRoles } from '@/utils/types';
>>>>>>> a6e1cb1 (рефакторинг кода и конечная (наверное) настройка api)

type TRolesSlice = {
  roles: TRoles[];
  messages: TMessage[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: TRolesSlice = {
  roles: [],
  messages: null,
  loading: false,
  error: null,
};

export const reqRoles = createAsyncThunk('roles/get', getRolesApi);
export const reqMessages = createAsyncThunk(
  'roles/more',
  (clarifictions: { _id: string; count: number }) =>
    getMessagesApi(clarifictions)
);

const rolesSlice = createSlice({
  name: 'roles',
  initialState: initialState,
  reducers: {},
  selectors: {
    getRoles: (state) => state.roles,
    getRolesByID: (state, id: string) =>
      state.roles.find((item) => item._id === id),
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(reqRoles.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(reqRoles.rejected, (state, error) => {
        state.error = error.error.message!;
        state.loading = false;
      })
<<<<<<< HEAD
      .addCase(
        reqRoles.fulfilled,
        (state, action: PayloadAction<TResponse<TRolesResponse>>) => {
          state.loading = false;
          state.roles = action.payload.data.roles;
        }
      )
=======
      .addCase(reqRoles.fulfilled, (state, action: PayloadAction<TRoles[]>) => {
        state.loading = false;
        state.roles = action.payload;
      })
>>>>>>> a6e1cb1 (рефакторинг кода и конечная (наверное) настройка api)
      .addCase(reqMessages.pending, (state) => {
        state.error = null;
        state.messages = null;
        state.loading = true;
      })
      .addCase(reqMessages.rejected, (state, error) => {
        state.error = error.error.message!;
        state.loading = false;
      })
      .addCase(
        reqMessages.fulfilled,
        (state, action: PayloadAction<TMessage[]>) => {
          state.loading = false;
          state.messages = action.payload;
        }
      );
  },
});

export const RolesReducer = rolesSlice.reducer;
export const {} = rolesSlice.actions;
export const { getLoading, getRoles, getRolesByID, getError } =
  rolesSlice.selectors;
