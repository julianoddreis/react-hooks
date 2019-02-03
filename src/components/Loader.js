import React from 'react'
import styled, { keyframes } from 'styled-components'

export default () => (
  <Container>
    <Loader />
  </Container>
)

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const animation = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`
const Loader = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid blue;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${animation} 1s linear infinite;
`
