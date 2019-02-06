import React from 'react'
import styled from 'styled-components'
import { Item } from './'

export default ({ todos, ...props }) =>
  todos.length === 0 ? (
    <Label>
      <Icon className='fas fa-sad-cry' />
      Nothing here.
    </Label>
  ) : (
    todos.map((item, i) => <Item key={i} item={item} {...props} />)
  )

const Icon = styled.i`
  font-size: 36px;
  margin-right: 10px;
`
const Label = styled.label`
  font-size: 24px;
`
