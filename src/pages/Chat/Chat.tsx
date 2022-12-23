import { useSelector } from "react-redux"
import { ChatNav } from "../../components/ChatNav/ChatNav"
import { GroupChat } from "../../components/GroupChat/GroupChat"
import { Users } from "../../components/Users/Users"
import { selectedChatSelector } from "../../slices/chatSlice"
import { ChatWrapper, Wrapper } from "./Chat.styles"


export const Chat = () => {
  const selectedChat = useSelector(selectedChatSelector)
  return (
    <Wrapper>
      <ChatNav />
      <ChatWrapper>
        {selectedChat === 'group' ?
          <GroupChat />
          :
          <Users />
        }
      </ChatWrapper>
    </Wrapper>
  )
}
