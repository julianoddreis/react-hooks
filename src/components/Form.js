import React from 'react'
import { Button, Field } from '../components'
import { useFormState } from '../helpers'

export default ({ add }) => {
  const { value, setValue, reset } = useFormState({ title: '', content: '' })
  const disabled = value.title === '' || value.content === ''
  return (
    <>
      <Field
        name='title'
        placeholder='Title'
        value={value}
        onChange={setValue}
      />
      <Field
        name='content'
        placeholder='Description'
        value={value}
        onChange={setValue}
      />
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
