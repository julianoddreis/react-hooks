import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Loader } from './'

const TopMenu = ({ count, loading }) => {
  return (
    <Container>
      <MenuItem to='/' color='blue'>
        <p>New</p>
      </MenuItem>
      <MenuItem to='/notes/todo' color='red'>
        <p>Todo</p>
        {loading ? <Loader /> : <p>{count.todo}</p>}
      </MenuItem>
      <MenuItem to='/notes/done' color='green'>
        <p>Done</p>
        {loading ? <Loader /> : <p>{count.done}</p>}
      </MenuItem>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const MenuItem = styled(Link)`
  ${({ color }) => `
    text-decoration: none;
    color: black;
    box-shadow: inset 0 -3px 0 0 ${color};
    flex: .3;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: all .1s ease-in-out;
    :hover {
      box-shadow: inset 0 -8px 0 0 ${color};
    }
  `}
`

const stateToProps = state => ({
  loading: state.count.loading,
  count: state.count.count
})

export default connect(stateToProps)(TopMenu)
