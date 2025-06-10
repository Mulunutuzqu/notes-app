import type { Note } from './interfaces'

export const getAllNotes = async () => {
  const res = await fetch('http://localhost:5001/api/notes')
  const notes: Note[] = await res.json()
  return notes
}

export const getNoteByID = async (_id: string) => {
  const res = await fetch(`http://localhost:5001/api/notes/${_id}`)
  const note: Note = await res.json()
  return note
}

export const updateNote = async (
  _id: string,
  noteData: { title: string; content: any },
) => {
  const res = await fetch(`http://localhost:5001/api/notes/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  })
  const note: Note = await res.json()
  return note
}
