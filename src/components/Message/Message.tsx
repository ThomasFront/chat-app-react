import React from 'react'
import { DateInfo, Name, Wrapper } from './Message.styles'
import Avatar from '/public/images/user.png'
import { format } from 'date-fns'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

type MessProps = {
  mess: {
    name: string,
    text: string,
    time: number,
    addedBy: string
  }
}

const handleDate = (timestamp: number) => {
  return format(timestamp, `h:m, LLLL L`)
}

export const Message = ({ mess }: MessProps) => {
  const [user] = useAuthState(auth)
  const { name, text, time, addedBy } = mess
  return (
    <Wrapper yourMess={addedBy === user?.uid}>
      <Name>{addedBy === user?.uid ? `You (${name})` : name}</Name>
      <DateInfo>{handleDate(time)}</DateInfo>
      <img src={Avatar} alt="Avatar użytkownika" />
      <p>{text}</p>
    </Wrapper>
  )
}
