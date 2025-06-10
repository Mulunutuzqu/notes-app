import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import type { Note } from '@/api/interfaces'
import { getAllNotes } from '@/api/notes'
import { formatDate } from '@/lib/utils'

function NotesListView() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    getAllNotes().then(setNotes)
  }, [])

  return (
    <div className="flex w-full flex-col gap-[12px] z-50">
      {notes.map((note) => {
        return (
          <Link
            key={note._id}
            to="/notes/$noteId"
            params={{ noteId: note._id }}
            activeProps={{
              className:
                'shadow-button border-transparent bg-white rounded-[12px]',
            }}
            className="border-b border-dashed transition-all duration-300 ease-out"
          >
            <div className="flex flex-col w-full  p-[12px] gap-[4px]">
              <p className="font-bold text-md">{note.title}</p>
              <div className="flex w-full text-[12px] text-gray-500">
                {formatDate(new Date(note.updatedAt))}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default NotesListView
