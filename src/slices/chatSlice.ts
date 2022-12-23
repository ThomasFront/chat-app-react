import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

type GroupMessageType = {
  text: string,
  time: number,
  name: string
  addedBy: string
}

type UserType = {
  email: string,
  name: string,
  uid: string
}

export const fetchAllMessages = createAsyncThunk(
  'chat/fetchMessages',
  async () => {
    const q = query(collection(db, "messages"), orderBy('time', 'asc'))
    const docs = await getDocs(q)
    const data = docs.docs.map(mess => mess.data() as GroupMessageType)
    return data
  }
)

export const fetchUsers = createAsyncThunk(
  'chat/fetchUsers',
  async () => {
    const docs = await getDocs(collection(db, "users"));
    const data = docs.docs.map(user => {
      return user.data() as UserType
    })
    return data
  }
)

export const addMessage = createAsyncThunk(
  'chat/addMessage',
  async (message: GroupMessageType) => {
    const {name, time, text, addedBy} = message
    await addDoc(collection(db, "messages"), {
      name,
      text,
      time,
      addedBy
    });
    return message
  }
)

export interface ChatState {
  selectedChat: string
  groupMessages: Array<GroupMessageType>
  username: string | null
  users: null | Array<UserType>
}

const initialState: ChatState = {
  selectedChat: 'group',
  groupMessages: [],
  username: null,
  users: null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeChat: (state, action: PayloadAction<string>) => {
      state.selectedChat = action.payload
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMessages.fulfilled, (state, action) => {
      state.groupMessages = action.payload
    }),
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.groupMessages.push(action.payload)
    }),
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
  }
})

export const { changeChat, updateUsername } = chatSlice.actions
export const selectedChatSelector = (state: RootState) => state.chat.selectedChat
export const groupMessagesSelector = (state: RootState) => state.chat.groupMessages
export const usernameSelector = (state: RootState) => state.chat.username
export const usersSelector = (state: RootState) => state.chat.users
export default chatSlice.reducer