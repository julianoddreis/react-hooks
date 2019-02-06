import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Form, Table, Loader } from '../components'
import { useTodoState } from '../helpers'

export default () => {
  const { add, fetchData, loading, ...hooksProps } = useTodoState([])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <h1>Create a note</h1>
      <Form add={add} />
      {loading ? <Loader /> : <Table {...hooksProps} />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`
