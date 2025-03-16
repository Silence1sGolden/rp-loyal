import { getProfileApi, Response } from '@/utils/multi-api';
import { TUserProfileData } from '@/utils/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type TProfileSliceState = {
  profile: TUserProfileData | null;
  loading: boolean;
  error: string | null;
};

const initialState: TProfileSliceState = {
  profile: null,
  loading: false,
  error: null,
};

export const getProfileData = createAsyncThunk('profile/get', getProfileApi);

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
      .addCase(getProfileData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getProfileData.fulfilled,
        (state, action: PayloadAction<Response<TUserProfileData>>) => {
          state.loading = false;
          state.profile = action.payload.data;
        }
      )
      .addCase(getProfileData.rejected, (state, error) => {
        state.loading = false;
        state.error = error.error.message!;
      });
  },
});

export const ProfileReducer = profileSlice.reducer;
export const { getProfile, getProfileError, getProfileLoading } =
  profileSlice.selectors;
