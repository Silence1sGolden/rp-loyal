import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRolesApi, getMessagesApi } from '../utils/multi-api';
import { TMessagesResponse, TResponse, TRoles } from '@/utils/types';

type TRolesSlice = {
  roles: TRoles[];
  loading: boolean;
  error: string | null;
};

const initialState: TRolesSlice = {
  roles: [],
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
      .addCase(
        reqRoles.fulfilled,
        (state, action: PayloadAction<TResponse<TRoles[]>>) => {
          state.loading = false;
          state.roles = action.payload.data;
        }
      )
      .addCase(reqMessages.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(reqMessages.rejected, (state, error) => {
        state.error = error.error.message!;
        state.loading = false;
      })
      .addCase(
        reqMessages.fulfilled,
        (state, action: PayloadAction<TResponse<TMessagesResponse>>) => {
          const { _id, messages } = action.payload.data;
          state.loading = false;
          state.roles.find((item) => item._id === _id)!.messages = [
            ...state.roles.find((item) => item._id === _id)!.messages,
            ...messages,
          ];
          state.roles = [...state.roles];
        }
      );
  },
});

export const RolesReducer = rolesSlice.reducer;
export const {} = rolesSlice.actions;
export const { getLoading, getRoles, getRolesByID, getError } =
  rolesSlice.selectors;
