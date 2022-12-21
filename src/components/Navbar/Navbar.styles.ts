import styled from "styled-components";
import { ImEarth } from 'react-icons/im'
import { FaUserFriends } from 'react-icons/fa'

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 16px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 0 5px;
      width: 16px;

      @media (min-width: 400px){
        width: 24px;
        margin: 0 10px;
      }

      @media (min-width: 768px){
        margin: 0 20px;
        width: 26px;
      }
    }

    p {
      font-weight: 300;
      font-size: 10px;

      @media (min-width: 400px){
        font-size: 14px;
      }

      @media (min-width: 768px){
      font-size: 16px;
    }
    }
    
    span {
      font-weight: 500;
    }
  }

  h2 {
    font-weight: 300;
    cursor: pointer;
    font-size: 10px;

    @media (min-width: 400px){
      font-size: 20px;
    }
  }

  button {
    background-color: transparent;
    color: ${({theme}) => theme.colors.text};
    background-color: ${({theme}) => theme.colors.distinctive};
    padding: 3px 4px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 10px;

    &:hover {
      background-color: royalblue;
    }

    @media (min-width: 400px){
      padding: 8px 16px;
      font-size: 14px;
    }
  }
`

export const EarthIcon = styled(ImEarth)`
  font-size: 34px;
  padding: 5px;
  cursor: pointer;
`

export const FriendsIcon = styled(FaUserFriends)`
  font-size: 36px;
  padding: 5px;
  cursor: pointer;
`

export const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 12px;
  }
`