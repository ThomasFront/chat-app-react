import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: ${({theme}) => theme.colors.distinctive};
  max-width: 350px;
  width: 100%;
  word-wrap: break-word;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
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
`