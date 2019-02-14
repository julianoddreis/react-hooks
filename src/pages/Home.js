import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCount } from '../redux/modules/count'
import styled from 'styled-components'
import { Form, Table, Loader } from '../components'
import { useTodoState } from '../helpers'

const Home = props => {
  const { add, fetchData, loading, ...hooksProps } = useTodoState(
    [],
    '',
    props.loadCount
  )

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

const dispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCount
    },
    dispatch
  )

export default connect(
  null,
  dispatchToProps
)(Home)
