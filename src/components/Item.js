import React from 'react'
import styled from 'styled-components'

export default ({ item, update, deleteTodo, ...props }) => (
  <Item {...props}>
    <div>
      <Label>Title: {item.title}</Label>
      <Label>Description: {item.description}</Label>
    </div>
    <Buttons>
      {item.status === 'todo' && (
        <Icon
          color='green'
          onClick={() => update({ ...item, status: 'done' })}
          className='fas fa-check-square'
        />
      )}
      <Icon
        color='red'
        onClick={() => deleteTodo(item._id)}
        className='fas fa-trash'
      />
    </Buttons>
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
  color: ${({ color }) => color};
  margin: 5px;
  font-size: 20px;
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
