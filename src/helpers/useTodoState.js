import { useState } from 'react'
import { getNotes, createNote, deleteNote } from '../services'

export default initialValue => {
  const [todos, setTodos] = useState(initialValue)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await getNotes()
      setTodos(res.data)
      setLoading(false)
    } catch (error) {
      window.alert('Ops! Algo deu errado.')
    }
  }

  return {
    todos,
    fetchData,
    loading,
    add: async todo => {
      try {
        setLoading(true)
        await createNote(todo)
        await fetchData()
        setLoading(false)
      } catch (error) {
        window.alert('Ops! Algo deu errado.')
      }
    },
    deleteTodo: async id => {
      try {
        setLoading(true)
        await deleteNote(id)
        await fetchData()
        setLoading(false)
      } catch (error) {
        window.alert('Ops! Algo deu errado.')
      }
    }
  }
}
