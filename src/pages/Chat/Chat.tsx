import { useSelector } from "react-redux"
import { FriendsChat } from "../../components/FriendsChat/FriendsChat"
import { ChatNav } from "../../components/ChatNav/ChatNav"
import { GroupChat } from "../../GroupChat/GroupChat"
import { selectedChatSelector } from "../../slices/chatSlice"
import { ChatWrapper, Wrapper } from "./Chat.styles"


export const Chat = () => {
  const selectedChat = useSelector(selectedChatSelector)
  console.log(selectedChat)
  return (
    <Wrapper>
      <ChatNav />
      <ChatWrapper>
        {selectedChat === 'group' ?
          <GroupChat />
          :
          <FriendsChat />
        }
      </ChatWrapper>
    </Wrapper>
  )
}
