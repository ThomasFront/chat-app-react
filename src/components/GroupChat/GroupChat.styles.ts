import styled from "styled-components";
import ScrollToBottom from 'react-scroll-to-bottom';

export const ScrollBottom = styled(ScrollToBottom)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  max-width: 1000px;
  max-height: 80vh;
  overflow-y: auto;
  width: 100%;

  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
  }
`

export const InputWrapper = styled.div`
  margin: 10px 0 30px;

  @media (min-width: 500px){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 400px;
  }

  input {
    margin-right: 5px;
    border: none;
    padding: 3px;
    border-radius: 6px;

    @media (min-width: 375px){
      padding: 10px;
    }

    @media (min-width: 500px){
      width: 60%;
    }

  }

  button {
    background-color: #ffffff;
    border: none;
    padding: 3px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #dddddd;
    }

    @media (min-width: 375px){
      padding: 10px;
    }

    @media (min-width: 500px){
      width: 30%;
    }
  }
  
  h3 {
    color: crimson;
    padding: 0 10px;
    text-align: center;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`