import React, { useState } from 'react'
import { BurgerIcon, EarthIcon, FriendsIcon, Menu, Wrapper } from './NavMobile.styles'

export const NavMobile = () => {
  const [showBurger, setShowBurger] = useState(true)

  return (
    <Wrapper>
      <BurgerIcon hideBurger={showBurger} onClick={() => setShowBurger(prev => !prev)} />
      <Menu hideMenu={showBurger}>
        <div>
          <EarthIcon />
          <p>Group chat</p>
        </div>
        <div>
          <FriendsIcon />
          <p>Friends</p>
        </div>
      </Menu>
    </Wrapper>
  )
}
