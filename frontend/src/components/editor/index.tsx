import { useEffect, useRef, useState } from 'react'
import EditorJS, { type ToolConstructable } from '@editorjs/editorjs'

import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import Warning from '@editorjs/warning'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import ToggleBlock from 'editorjs-toggle-block'
import EditorjsList from '@editorjs/list'
//@ts-ignore
import Annotation from 'editorjs-annotation'

const Editor = ({ data, onChange, editorBlock, readOnly }: any) => {
  const ref = useRef<EditorJS>(null)

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorBlock,
        data: data,
        readOnly: readOnly,
        inlineToolbar: ['bold', 'italic', 'annotation'],
        tools: {
          header: {
            class: Header as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          paragraph: {
            class: Paragraph as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          list: {
            class: EditorjsList as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          warning: Warning,
          quote: Quote,
          toggle: ToggleBlock,
          separator: Delimiter,
          annotation: Annotation,
        },
        onChange: async (api, event) => {
          const data = await api.saver.save()
          onChange(data)
          // console.log('onchange editor data:', data)
        },
      })
      ref.current = editor
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy()
        ref.current = null
      }
    }
  }, [])
  return (
    <>
      <div id={editorBlock}></div>
    </>
  )
}

export default Editor
