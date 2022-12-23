import styled, { css } from "styled-components";

type WrapperProps = {
  yourMess: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: ${({theme}) => theme.colors.distinctive};
  width: 150px;
  word-wrap: break-word;
  ${({yourMess}) => yourMess && css`
    background-color: #F04E1C;
  `}

  @media (min-width: 350px){
    width: 220px;
  }

  @media (min-width: 500px){
    width: 360px;
  }

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
    width: 24px;
  }
  
`

export const DateInfo = styled.p`
  position: absolute;
  top: -12px;
  right: 0;
  font-size: 10px;
`

export const Name = styled.p`
  position: absolute;
  top: -12px;
  left: 0;
  font-size: 10px;
  font-weight: bold;
`