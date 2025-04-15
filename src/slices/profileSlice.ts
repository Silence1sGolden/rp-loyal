import { getProfileApi } from '@/utils/multi-api';
import { TProfile, TResponse } from '@/utils/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type TProfileSliceState = {
  profile: TProfile | null;
  loading: boolean;
  error: string | null;
};

const initialState: TProfileSliceState = {
  profile: null,
  loading: false,
  error: null,
};

export const reqProfile = createAsyncThunk('profile/get', (id: string) =>
  getProfileApi(id)
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
  selectors: {
    getProfile: (state) => state.profile,
    getProfileLoading: (state) => state.loading,
    getProfileError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(reqProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        reqProfile.fulfilled,
        (state, action: PayloadAction<TResponse<{ user: TProfile }>>) => {
          state.loading = false;
          state.profile = action.payload.data.user;
        }
      )
      .addCase(reqProfile.rejected, (state, error) => {
        console.log('error:', error);
        state.loading = false;
        state.error = error.error.message!;
      });
  },
});

export const ProfileReducer = profileSlice.reducer;
export const { getProfile, getProfileError, getProfileLoading } =
  profileSlice.selectors;
