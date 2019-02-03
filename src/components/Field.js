import React from 'react'
import styled from 'styled-components'

export default ({ value, onChange, add, reset }) => (
  <Field
    value={value}
    onChange={e => onChange(e.target.value)}
    onKeyDown={({ key }) => {
      if (key === 'Enter' && value !== '') {
        add(value)
        reset()
      }
    }}
  />
)

const Field = styled.input`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid grey;
  transition: all 0.3s ease-in-out;
  :focus {
    border: 1px solid blue;
  }
`
