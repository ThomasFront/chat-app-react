import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 75vh;

  p {
    color: crimson;
    text-align: center;
  }

  h1 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >button {
      margin: 10px 0;
      background-color: ${({theme}) => theme.colors.distinctive};
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      color: ${({theme}) => theme.colors.text};
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: royalblue;
      }
    }

    input {
      margin: 8px 0;
      padding: 16px 32px;
      border-radius: 6px;
      border: none;
    }
  }

  h4 {
    margin: 10px 0;
    font-weight: 300;
    text-align: center;

    button {
      border: none;
      padding: 4px 8px;
      border-radius: 6px;
      margin-top: 5px;
      cursor: pointer;
    }
  }
`