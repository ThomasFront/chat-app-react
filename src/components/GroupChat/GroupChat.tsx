import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Message } from '../Message/Message'
import { addMessage, fetchAllMessages, groupMessagesSelector, usernameSelector } from '../../slices/chatSlice'
import { AppDispatch } from '../../store'
import { Container, InputWrapper, Wrapper } from './GroupChat.styles'

export const GroupChat = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const groupMessages = useSelector(groupMessagesSelector)
  const username = useSelector(usernameSelector)

  useEffect(() => {
    dispatch(fetchAllMessages())
  }, [])

  const handleMessage = () => {
    setText(text)
    dispatch(addMessage({
      text,
      name: username as string,
      time: Date.now(),
    }))
  }

  return (
    <Container>
      <Wrapper>
        {groupMessages.map(mess => <Message key={mess.time} mess={mess} />)}
      </Wrapper>
      <InputWrapper>
        <input
          type="text"
          placeholder='wpisz wiadomość'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleMessage}>Wyślij</button>
      </InputWrapper>
    </Container>
  )
}
