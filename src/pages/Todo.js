import React from 'react'
import styled from 'styled-components'
import { Button, Field, Item } from '../components'
import { useTodoState, useValueState } from '../helpers'

export default () => {
  const { todos, add, deleteTodo } = useTodoState([])
  const { value, setValue, reset } = useValueState('')
  return (
    <Container>
      <h1>Todo list</h1>
      <Field value={value} onChange={setValue} add={add} reset={reset} />
      <Button
        label='Add'
        disabled={value === ''}
        onClick={() => {
          add(value)
          reset()
        }}
      />
      {todos.map((item, i) => (
        <Item key={i} label={item} deleteTodo={() => deleteTodo(i)} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
`
