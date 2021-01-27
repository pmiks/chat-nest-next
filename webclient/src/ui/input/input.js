import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  box-sizing: border-box;
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export const Input = () => {
  return <StyledInput type="text" />
}
