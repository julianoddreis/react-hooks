import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Form, Item, Loader } from '../components'
import { useTodoState } from '../helpers'

export default () => {
  const { todos, add, deleteTodo, fetchData, loading } = useTodoState([])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <h1>Todo list</h1>
      <Form add={add} />
      {loading ? (
        <Loader />
      ) : (
        todos.map((item, i) => (
          <Item key={i} item={item} deleteTodo={() => deleteTodo(item._id)} />
        ))
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
`
