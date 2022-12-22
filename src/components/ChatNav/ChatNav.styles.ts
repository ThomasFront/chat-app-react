import styled, { css } from "styled-components";
import { ImEarth } from 'react-icons/im'
import { FaUserFriends } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

type MenuProps = {
  hideMenu: boolean
}

type BurgerProps = {
  hideBurger: boolean
}

export const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  div {
    cursor: pointer;

    p {
      font-size: 12px;

      @media (min-width: 768px){
        font-size: 12px;
      }
    }

    svg {
      margin-bottom: 5px;
    }
  }
`

export const EarthIcon = styled(ImEarth)`

  @media (min-width: 768px){
    font-size: 22px;
  }
`

export const FriendsIcon = styled(FaUserFriends)`

  @media (min-width: 768px){
    font-size: 22px;
  }

`

export const BurgerIcon = styled<any>(GiHamburgerMenu)`
  position: absolute;
  right: -25px;
  top: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s;

  ${({hideBurger}) => hideBurger && css`
    transform: translateX(-80px);
  `}

  @media (min-width: 768px){
    font-size: 30px;
    right: -40px;
  }
`

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 2px;
  background-color: ${({theme}) => theme.colors.secondary};
  width: 80px;
  min-height: 92vh;
  text-align: center;
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;

  ${({hideMenu}) => hideMenu && css`
    transform: translateX(-80px);
    opacity: 0;
  `}

  >div {
    margin: 10px 0;
  }

@media (min-width: 1200px){
  min-height: 85vh;
}
`
