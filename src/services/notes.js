import api from '../providers/fetchClient'

export const getNotes = param =>
  api.get(`/notes${param ? `?status=${param}` : ''}`)

export const createNote = note => api.post('/notes', note)

export const updateNote = note => api.put(`/notes/${note._id}`, note)

export const deleteNote = id => api.delete(`/notes/${id}`)

export const getCount = () => api.get('/notes/count')
