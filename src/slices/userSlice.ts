import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../utils/types';
import {
  getUserApi,
  loginApi,
  LoginUserData,
  RegisterUserData,
  regUserApi,
  Response,
  UserResponse,
} from '../utils/multi-api';

interface UserState {
  isChecked: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  isChecked: false,
  user: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk('user/login', (user: LoginUserData) =>
  loginApi(user)
);

export const regUser = createAsyncThunk(
  'user/registration',
  (user: RegisterUserData) => regUserApi(user)
);

export const getUserData = createAsyncThunk('user/get', getUserApi);

export const checkUser = createAsyncThunk('user/check', (_, { dispatch }) => {
  // замена cookie
  if (localStorage.getItem('accessToken')) {
    dispatch(getUserData()).finally(() => {
      dispatch(setIsChecked());
    });
  } else {
    dispatch(setIsChecked());
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setIsChecked: (state) => {
      state.isChecked = true;
    },
  },
  selectors: {
    getCheck: (state) => state.isChecked,
    getUser: (state) => state.user,
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        getUserData.fulfilled,
        (state, actions: PayloadAction<Response<UserResponse>>) => {
          state.loading = false;
          state.user = actions.payload.data.user;
        }
      )
      .addCase(getUserData.rejected, (state, error) => {
        state.loading = false;
        state.error = error.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<Response<UserResponse>>) => {
          state.loading = false;
          state.user = action.payload.data.user;
        }
      )
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
        (state, action: PayloadAction<Response<UserResponse>>) => {
          state.loading = false;
          state.user = action.payload.data.user;
        }
      )
      .addCase(regUser.rejected, (state, error) => {
        state.loading = false;
        state.error = error.error.message!;
      });
  },
});

export const UserReducer = userSlice.reducer;
export const { setIsChecked } = userSlice.actions;
export const { getCheck, getUser, getError, getLoading } = userSlice.selectors;
