import { useEffect, useState } from 'react'
import { useGlicol } from '../hooks/useGlicol'
import './Editor.css'

interface EditorProps {
  initialContent: string
}

export function Editor({ initialContent }: EditorProps) {
  const [content, setContent] = useState(initialContent)
  const { setCurrentCode } = useGlicol()

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

  useEffect(() => {
    setCurrentCode(content)
  }, [content, setCurrentCode])

  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="editor"
    />
  )
}
