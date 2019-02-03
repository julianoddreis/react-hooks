import React from 'react'
import styled from 'styled-components'

export default ({ label, ...props }) => <Button {...props}>{label}</Button>

const Button = styled.button`
  padding: 10px 25px;
  background: blue;
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 0 2px 2px -2px gray;
  cursor: pointer;
  margin: 20px 0;
  transition: all 0.2s ease-in-out;
  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    background: lightgray;
  `}
`
