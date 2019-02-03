import { useState } from 'react'

export default initialValue => {
  const [todos, setTodos] = useState(initialValue)
  return {
    todos,
    add: value => {
      setTodos([...todos, value])
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex)
      setTodos(newTodos)
    }
  }
}
