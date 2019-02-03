import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Todo } from './pages'

export default () => (
  <>
    <GlobalStyle />
    <Todo />
  </>
)

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
    font-weight: 600;
  }
`
