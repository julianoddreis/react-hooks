import React from 'react'
import { Button, Field } from '../components'
import { useFormState } from '../helpers'

export default ({ add }) => {
  const { value, onChange, reset } = useFormState({
    title: '',
    description: ''
  })
  const disabled = value.title === '' || value.description === ''
  return (
    <>
      <Field name='title' value={value} onChange={onChange} />
      <Field name='description' value={value} onChange={onChange} />
      <Button
        label='Add'
        disabled={disabled}
        onClick={() => {
          add(value)
          reset()
        }}
      />
    </>
  )
}
