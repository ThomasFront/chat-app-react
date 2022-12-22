import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

type GroupMessageType = {
  text: string,
  time: number,
  name: string
}

export const fetchAllMessages = createAsyncThunk(
  'chat/fetchMessages',
  async () => {
    const q = query(collection(db, "messages"), orderBy('time', 'asc'))
    const docs = await getDocs(q)
    const data = await docs.docs.map(mess => {
      return mess.data() as GroupMessageType
    })
    return data
  }
)

export const addMessage = createAsyncThunk(
  'chat/addMessage',
  async (message: GroupMessageType) => {
    const {name, time, text} = message
    const newMess = await addDoc(collection(db, "messages"), {
      name,
      text,
      time
    });
    return message
  }
)

export interface ChatState {
  selectedChat: string
  groupMessages: Array<GroupMessageType>
  username: string | null
}

const initialState: ChatState = {
  selectedChat: 'group',
  groupMessages: [],
  username: null
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
      console.log(action.payload)
      state.groupMessages = action.payload
    }),
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.groupMessages.push(action.payload)
    })
  }
})

export const { changeChat, updateUsername } = chatSlice.actions
export const selectedChatSelector = (state: RootState) => state.chat.selectedChat
export const groupMessagesSelector = (state: RootState) => state.chat.groupMessages
export const usernameSelector = (state: RootState) => state.chat.username
export default chatSlice.reducer