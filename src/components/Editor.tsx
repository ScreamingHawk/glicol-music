import { FC, useEffect, useState } from 'react'
import { useGlicol } from '../hooks/useGlicol'
import './Editor.css'

interface EditorProps {
  initialContent: string
}

export const Editor: FC<EditorProps> = ({ initialContent }) => {
  const { setCurrentCode } = useGlicol()
  const [value, setValue] = useState(initialContent)

  useEffect(() => {
    setCurrentCode(initialContent)
    setValue(initialContent)
  }, [initialContent, setCurrentCode])

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    setCurrentCode(newValue)
  }

  return (
    <textarea
      value={value}
      onChange={onChange}
      className="editor"
      spellCheck={false}
    />
  )
}
