import React from 'react'
import styled from 'styled-components'

export default ({ label, deleteTodo, ...props }) => (
  <Item {...props}>
    <Label>{label}</Label>
    <Icon onClick={deleteTodo} className='fas fa-trash' />
  </Item>
)

const Item = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-itens: center;
`
const Label = styled.p`
  margin: 0;
  padding: 0;
`
const Icon = styled.i`
  cursor: pointer;
  color: red;
`
