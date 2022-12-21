import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  color: ${({theme}) => theme.colors.text};

  @media (min-width: 1200px){
    margin: 40px auto;
  }
`

export const Container = styled.main`
  padding: 16px;
  background-color: ${({theme}) => theme.colors.primary};
  min-height: 92vh;

  @media (min-width: 1200px){
    min-height: 85vh;
  }
`