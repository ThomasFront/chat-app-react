import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Message } from '../Message/Message'
import { addMessage, fetchAllMessages, groupMessagesSelector, usernameSelector } from '../../slices/chatSlice'
import { AppDispatch } from '../../store'
import { Container, InputWrapper, ScrollBottom } from './GroupChat.styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { Loader } from '../Loader/Loader'

export const GroupChat = () => {
  const [text, setText] = useState('')
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch<AppDispatch>()
  const groupMessages = useSelector(groupMessagesSelector)
  const username = useSelector(usernameSelector)

  useEffect(() => {
    setLoading(true)
    dispatch(fetchAllMessages())
    setLoading(false)
    setInterval(() => {
      dispatch(fetchAllMessages())
    }, 7000)
  }, [])

  const handleMessage = () => {
    setText(text)
    dispatch(addMessage({
      text,
      name: username as string,
      time: Date.now(),
      addedBy: user?.uid as string
    }))
    setText('')
  }

  return (
    <Container>
      {!loading ?
        <>
          <ScrollBottom>
            <div>
              {groupMessages.map(mess => <Message key={mess.time} mess={mess} />)}
            </div>
          </ScrollBottom>
          <InputWrapper>
            {user ?
              <>
                <input
                  type="text"
                  placeholder='wpisz wiadomość'
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
                <button
                  onClick={handleMessage}
                  disabled={!text}
                >
                  Wyślij
                </button>
              </>
              :
              <h3>Zaloguj sie aby wysłać wiadomość.</h3>
            }
          </InputWrapper>
        </>
        :
        <Loader />
      }
    </Container>
  )
}
