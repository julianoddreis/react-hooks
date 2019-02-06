import { useState } from 'react'
import { getNotes, createNote, deleteNote, updateNote } from '../services'

export default (initialValue, status) => {
  const [todos, setTodos] = useState(initialValue)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await getNotes(status)
      setTodos(res.data)
    } catch (error) {
      window.alert(error.message)
    } finally {
      setLoading(false)
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
      } catch (error) {
        window.alert(error.message)
        setLoading(false)
      }
    },
    deleteTodo: async id => {
      try {
        setLoading(true)
        await deleteNote(id)
        await fetchData()
        window.alert('Note was deleted.')
      } catch (error) {
        window.alert(error.message)
        setLoading(false)
      }
    },
    update: async note => {
      try {
        setLoading(true)
        await updateNote(note)
        await fetchData()
        window.alert('Note was updated.')
      } catch (error) {
        window.alert(error.message)
        setLoading(false)
      }
    }
  }
}
