import { getFormsApi } from '@/utils/multi-api';
import { TFormsResponse, TResponse, TRolesForm } from '@/utils/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TSeachParams = {
  tags: string[];
  ganre: string[];
  likes: boolean;
  age: {
    '16+': boolean;
    '18+': boolean;
    '21+': boolean;
  };
};

type SearchSliceState = {
  searchParams: TSeachParams;
  forms: TRolesForm[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: SearchSliceState = {
  searchParams: {
    tags: [],
    ganre: [],
    likes: false,
    age: {
      '16+': false,
      '18+': false,
      '21+': false,
    },
  },
  forms: null,
  loading: false,
  error: null,
};

const reqForms = createAsyncThunk('search/get', (filter: TSeachParams) =>
  getFormsApi(filter)
);

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<TSeachParams>) => {
      state.searchParams = action.payload;
    },
  },
  selectors: {
    getFilter: (state) => state.searchParams,
    getForms: (state) => state.forms,
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(reqForms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reqForms.rejected, (state, error) => {
        state.loading = false;
        state.error = error.error.message!;
      })
      .addCase(
        reqForms.fulfilled,
        (state, action: PayloadAction<TResponse<TFormsResponse>>) => {
          state.loading = false;
          state.forms = action.payload.data.roles;
        }
      );
  },
});

export const SearchReducer = searchSlice.reducer;
