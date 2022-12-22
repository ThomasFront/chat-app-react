import React from 'react'
import { DateInfo, Name, Wrapper } from './Message.styles'
import Avatar from '/public/images/user.png'
import { format } from 'date-fns'

type MessProps = {
  mess: {
    name: string,
    text: string,
    time: number,
  }
}

const handleDate = (timestamp: number) => {
  return format(timestamp, `h:m, LLLL L`)
}

export const Message = ({ mess }: MessProps) => {
  const { name, text, time } = mess
  return (
    <Wrapper>
      <Name>{name}</Name>
      <DateInfo>{handleDate(time)}</DateInfo>
      <img src={Avatar} alt="Avatar użytkownika" />
      <p>{text}</p>
    </Wrapper>
  )
}
