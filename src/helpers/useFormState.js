import { useState } from 'react'

export default initialValue => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: e => {
      const { target } = e
      setValue({ ...value, [target.name]: target.value })
    },
    reset: () => setValue(initialValue)
  }
}
