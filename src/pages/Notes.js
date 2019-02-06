import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Table, Loader } from '../components'
import { useTodoState } from '../helpers'

export default props => {
  const { params } = props.match
  const { fetchData, loading, ...hooksProps } = useTodoState([], params.status)

  useEffect(() => {
    fetchData()
  }, [params.status])

  return (
    <Container>
      <h1>{params.status[0].toUpperCase() + params.status.slice(1)} notes</h1>
      {loading ? <Loader /> : <Table {...hooksProps} />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`
