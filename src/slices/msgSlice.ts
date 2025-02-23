import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Chat,
  getChatApi,
  getChatResponse,
  getChatsApi,
  getChatsResponse,
  Response,
} from '../utils/multi-api';

interface IMSGSlice {
  chatList: Chat[];
  chats: Record<string, Message[]>;
  chatListLoading: boolean;
  chatLoading: boolean;
  error: string | null;
}

export interface Message {
  user: string;
  message: string;
  sendAt: string;
}

const initialState: IMSGSlice = {
  chatList: [],
  chats: {},
  chatListLoading: false,
  chatLoading: false,
  error: null,
};

export const requestChats = createAsyncThunk('msg/chats', getChatsApi);
export const requestChat = createAsyncThunk('msg/chat', getChatApi);

const msgSlice = createSlice({
  name: 'msg',
  initialState: initialState,
  reducers: {
    deleteChat: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      delete state.chats[id];
      state.chatList = state.chatList.filter((item) => item.id !== id);
      state.chats = { ...state.chats };
    },
  },
  selectors: {
    getChatLoading: (state) => state.chatLoading,
    getChatListLoading: (state) => state.chatListLoading,
    getError: (state) => state.error,
    getChatList: (state) => state.chatList,
    getChatByID: (state, id: string) => state.chats[id],
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestChats.pending, (state) => {
        state.error = null;
        state.chatListLoading = true;
      })
      .addCase(requestChats.rejected, (state, error) => {
        state.error = error.error.message!;
        state.chatListLoading = false;
      })
      .addCase(
        requestChats.fulfilled,
        (state, action: PayloadAction<Response<getChatsResponse>>) => {
          const { chats } = action.payload.data;
          state.chatListLoading = false;
          state.chatList = chats;
        }
      )
      .addCase(requestChat.pending, (state) => {
        state.error = null;
        state.chatLoading = true;
      })
      .addCase(requestChat.rejected, (state, error) => {
        state.error = error.error.message!;
        state.chatLoading = false;
      })
      .addCase(
        requestChat.fulfilled,
        (state, action: PayloadAction<Response<getChatResponse>>) => {
          const { id, messages } = action.payload.data;
          state.chatLoading = false;
          state.chats = { ...state.chats, [id]: messages };
        }
      );
  },
});

export const MSGReducer = msgSlice.reducer;
export const { deleteChat } = msgSlice.actions;
export const {
  getChatByID,
  getChatListLoading,
  getChatLoading,
  getError,
  getChatList,
} = msgSlice.selectors;
