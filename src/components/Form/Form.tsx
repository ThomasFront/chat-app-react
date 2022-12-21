import React from 'react'
import { Wrapper } from './Form.styles'

export const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
