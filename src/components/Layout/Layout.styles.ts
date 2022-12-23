import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  color: ${({theme}) => theme.colors.text};
`

export const Container = styled.main`
  background-color: ${({theme}) => theme.colors.primary};
  height: 100vh;

  @media (min-width: 1200px){
    min-height: 85vh;
  }
`