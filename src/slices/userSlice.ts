import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginApi, regUserApi } from '../utils/multi-api';
import { TLoginData, TRegisterData, TResponse, TUser } from '@/utils/types';

export type TUserState = {
  auth: boolean;
  user: TUser | null;
  loading: boolean;
  error: string | null;
};

const initialState: TUserState = {
  auth: false,
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk('user/login', (user: TLoginData) =>
  loginApi(user)
);

export const regUser = createAsyncThunk(
  'user/register',
  (user: TRegisterData) => regUserApi(user)
);

// export const getAuth = createAsyncThunk('user/getAuth', checkAuth);

export const checkAuth = createAsyncThunk('user/check', (_, { dispatch }) => {
  // замена cookie
  if (localStorage.getItem('accessToken')) {
    // dispatch(getAuth()).finally(() => {
    //   dispatch(setIsChecked());
    // });
  } else {
    dispatch(setIsChecked());
  }
});

const userSlise = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setIsChecked: (state) => {
      state.auth = true;
    },
  },
  selectors: {
    getAuthCheck: (state) => state.auth,
    getUser: (state) => state.user,
    getUserLoading: (state) => state.loading,
    getUserError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getAuth.pending, (state) => {
      //   state.auth = true;
      //   state.error = '';
      // })
      // .addCase(getAuth.fulfilled, (state) => {
      //   state.loading = false;
      // })
      // .addCase(getAuth.rejected, (state, error) => {
      //   state.loading = false;
      //   state.error = error.error.message!;
      // })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(
      //   loginUser.fulfilled,
      //   (state, action: PayloadAction<TResponse<TUser>>) => {
      //     state.loading = false;
      //     state.user = action.payload.data;
      //   }
      // )
      .addCase(loginUser.rejected, (state, error) => {
        state.loading = false;
        state.error = error.error.message!;
      })
      .addCase(regUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        regUser.fulfilled,
        (state, action: PayloadAction<TResponse<TUser>>) => {
          state.loading = false;
          state.user = action.payload.data;
        }
      )
      .addCase(regUser.rejected, (state, error) => {
        state.loading = false;
        state.error = error.error.message!;
      });
  },
});

export const UserReducer = userSlise.reducer;
export const { setIsChecked } = userSlise.actions;
export const { getAuthCheck, getUser, getUserError, getUserLoading } =
  userSlise.selectors;
