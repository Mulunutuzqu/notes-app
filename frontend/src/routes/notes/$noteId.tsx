import { getNoteByID, updateNote } from '@/api/notes'
import { createFileRoute } from '@tanstack/react-router'
import type { Note } from '@/api/interfaces'
import { useEffect, useState } from 'react'
import Editor from './../../components/editor'
import { Toaster, toast } from 'sonner'
import { BookMarked } from 'lucide-react'
import SaveButton from '@/components/ui/SaveButton'
import { useRouter } from '@tanstack/react-router'

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: 'header',
      data: {
        text: 'This is my awesome editor!',
        level: 1,
      },
    },
  ],
}

export const Route = createFileRoute('/notes/$noteId')({
  preload: false,
  shouldReload: true,
  staleTime: 0,

  component: NoteDetails,
  loader: async ({ params }) => {
    const noteData = await getNoteByID(params.noteId)
    return noteData
  },
})

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function NoteDetails() {
  const router = useRouter()
  const noteData = Route.useLoaderData()

  const [updatedNoteContent, setUpdatedNoteContent] = useState(
    noteData?.content,
  )
  const [updatedNoteTitle, setUpdatedNoteTitle] = useState(noteData.title)
  const [noteTitle, setNoteTitle] = useState(noteData.title)

  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(e.target.value)
  }

  const handleSave = async () => {
    try {
      setIsLoading(true)
      await updateNote(noteData._id, {
        title: noteTitle,
        content: updatedNoteContent,
      })
      router.invalidate()
      await delay(800)
      setIsSaved(true)
    } catch (error) {
      throw new Error('Gagal update')
    } finally {
      setIsLoading(false)
      await delay(2000)
      setIsSaved(false)
    }
  }

  useEffect(() => {
    router.invalidate()
    setNoteTitle(noteData.title)
    setUpdatedNoteContent(noteData.content)
    setIsSaved(false)
  }, [noteData])

  return noteData ? (
    <div
      className="relative flex w-full gap-[32px] flex-col "
      key={noteData._id}
    >
      <div className="pointer-events-none fixed inset-0 z-30 h-screen w-full noise bg-repeat opacity-[0.03]" />
      <div className="absolute top-[0]">
        <Toaster richColors />
      </div>

      <div className="flex w-full flex-col gap-[0px] justify-center items-center sticky top-0 z-50 bg-white shadow-feather-toWhite overflow-clip border-b border-dashed">
        <div className="pointer-events-none absolute inset-0 z-10 h-screen w-full noise bg-repeat opacity-[0.03]" />
        <div className="flex right-0 items-center z-20 w-full max-w-[828px] p-[12px]">
          <div className="flex w-full gap-[8px]">
            <p className="flex gap-[4px] font-bold items-center text-gray-500">
              <span>
                <BookMarked size={20} />
              </span>
              Notes
            </p>
          </div>
          {/* <div className="w-[128px] flex items-center justify-center"> */}
          <SaveButton
            isSaved={isSaved}
            isLoading={isLoading}
            onClick={isSaved || isLoading ? () => {} : handleSave}
          />
          {/* </div> */}
        </div>
      </div>
      <div className="flex w-full max-w-[800px] flex-col gap-[40px] place-self-center py-[40px] px-[56px] z-40 bg-white shadow-paper min-h-[100dvh]">
        <div className="pointer-events-none absolute inset-0 z-10 h-screen w-full noise bg-repeat opacity-[0.01]" />
        <div className="flex w-full gap-[4px] flex-col">
          <p className="font-bold text-[20px] text-gray-400">Title</p>
          <div
            className="flex w-full border-b border-dashed pb-[8px]"
            contentEditable
          >
            <input
              key={`title-${noteData._id}`}
              className="font-bold text-[40px] w-full max-w-full"
              required
              value={noteTitle}
              onChange={handleTitleChange}
              contentEditable
            />
          </div>
        </div>
        <Editor
          data={noteData.content}
          onChange={setUpdatedNoteContent}
          editorBlock={`editor-container-${noteData._id}`}
          key={noteData._id}
        />
      </div>
    </div>
  ) : (
    'No note found'
  )
}
