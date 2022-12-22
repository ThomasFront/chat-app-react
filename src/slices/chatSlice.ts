import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface ChatState {
  selectedChat: string
}

const initialState: ChatState = {
  selectedChat: 'group',
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeChat: (state, action: PayloadAction<string>) => {
      state.selectedChat = action.payload
    },
  },
})

export const { changeChat } = chatSlice.actions
export const selectedChatSelector = (state: RootState) => state.chat.selectedChat
export default chatSlice.reducer