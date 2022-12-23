import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeChat } from '../../slices/chatSlice'
import { BurgerIcon, EarthIcon, FriendsIcon, Menu, Wrapper } from './ChatNav.styles'

export const ChatNav = () => {
  const [showBurger, setShowBurger] = useState(true)
  const dispatch = useDispatch()

  const handleChatNav = (chat: string) => {
    dispatch(changeChat(chat))
    setShowBurger(true)
  }

  return (
    <Wrapper>
      <BurgerIcon hideBurger={showBurger} onClick={() => setShowBurger(prev => !prev)} />
      <Menu hideMenu={showBurger}>
        <div onClick={() => handleChatNav('group')}>
          <EarthIcon />
          <p>Czat grupowy</p>
        </div>
        <div onClick={() => handleChatNav('friends')}>
          <FriendsIcon />
          <p>Użytkownicy</p>
        </div>
      </Menu>
    </Wrapper>
  )
}
