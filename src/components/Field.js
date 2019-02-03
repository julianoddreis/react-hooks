import React from 'react'
import styled from 'styled-components'

export default ({ value, name, onChange, placeholder }) => (
  <Field
    value={value[name]}
    onChange={e => onChange({ ...value, [name]: e.target.value })}
    placeholder={placeholder}
    rows={name === 'content' ? 5 : 1}
  />
)

const Field = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  resize: none;
  border-radius: 5px;
  outline: none;
  border: 1px solid grey;
  transition: all 0.3s ease-in-out;
  :focus {
    border: 1px solid blue;
  }
`
