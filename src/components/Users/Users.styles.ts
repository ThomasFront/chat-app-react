import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 38px 10px 0;
  width: 100%;
  width: 400px;
  background-color: #D9DDDC;
  color: black;
  border-radius: 6px;

  h2 {
    margin: 10px 5px;
  }

  li {
    margin-bottom: 5px;
  }

  >div {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 20px;
    }

    svg {
      font-size: 22px;
    }
  }
`
