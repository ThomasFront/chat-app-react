import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  height: 80vh;
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
  
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
`