import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCount } from '../redux/modules/count'
import styled from 'styled-components'
import { Table, Loader } from '../components'
import { useTodoState } from '../helpers'

const Notes = props => {
  const { params } = props.match
  const { fetchData, loading, ...hooksProps } = useTodoState(
    [],
    params.status,
    props.loadCount
  )

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
)(Notes)
