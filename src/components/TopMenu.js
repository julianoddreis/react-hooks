import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getCount } from '../services'

export default () => {
  const [count, setCount] = useState({})

  const fetchCount = async () => {
    const res = await getCount()
    setCount(res.data)
  }

  useEffect(() => {
    fetchCount()
  }, [])

  return (
    <Container>
      <MenuItem to='/' color='blue'>
        <p>New</p>
      </MenuItem>
      <MenuItem to='/notes/todo' color='red'>
        <p>Todo</p>
        <p>{count.todo}</p>
      </MenuItem>
      <MenuItem to='/notes/done' color='green'>
        <p>Done</p>
        <p>{count.done}</p>
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
