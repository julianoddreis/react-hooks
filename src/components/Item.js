import React from 'react'
import styled from 'styled-components'

export default ({ item, deleteTodo, ...props }) => (
  <Item {...props}>
    <div>
      <Label>Title: {item.title}</Label>
      <Label>Description: {item.content}</Label>
    </div>
    <Icon onClick={deleteTodo} className='fas fa-trash' />
  </Item>
)

const Item = styled.div`
  margin-bottom: 10px;
  word-break: break-all;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`
const Label = styled.p`
  margin: 0;
  padding: 0;
`
const Icon = styled.i`
  cursor: pointer;
  color: red;
`
