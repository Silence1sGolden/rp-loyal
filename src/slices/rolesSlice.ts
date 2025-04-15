import { getRolesApi, Response } from '@/utils/multi-api';
import { TRoleInfo } from '@/utils/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type TRolesSliceState = {
  roles: TRoleInfo[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: TRolesSliceState = {
  roles: null,
  loading: false,
  error: null,
};

export type TSearchParams = {
  length: number;
  filter?: string;
};

export const getRolesData = createAsyncThunk(
  'roles/get',
  (params: TSearchParams) => getRolesApi(params)
);

const rolesSlice = createSlice({
  name: 'roles',
  initialState: initialState,
  reducers: {},
  selectors: {
    getRoles: (state) => state.roles,
    getWithFilter: (state) => state.roles,
    getRolesLoading: (state) => state.loading,
    getRolesError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRolesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRolesData.rejected, (state, error) => {
        state.loading = false;
        state.error = error.error.message!;
      })
      .addCase(
        getRolesData.fulfilled,
        (state, action: PayloadAction<Response<TRoleInfo[]>>) => {
          state.loading = false;
          state.roles = state.roles
            ? [...state.roles, ...action.payload.data]
            : [...action.payload.data];
        }
      );
  },
});

export const RolesReducer = rolesSlice.reducer;
export const { getRoles, getRolesError, getRolesLoading, getWithFilter } =
  rolesSlice.selectors;
