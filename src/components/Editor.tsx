import { FC, useEffect, useState } from 'react'
import { useGlicol } from '../hooks/useGlicol'
import './Editor.css'

interface EditorProps {
  initialContent: string
}

const minBlankLines = 3

export const Editor: FC<EditorProps> = ({ initialContent }) => {
  const { setCurrentCode } = useGlicol()
  const [value, setValue] = useState(initialContent)

  useEffect(() => {
    const formattedContent = initialContent.replace(
      /\n*$/,
      '\n'.repeat(minBlankLines + 1),
    )
    setCurrentCode(formattedContent)
    setValue(formattedContent)
  }, [initialContent, setCurrentCode])

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value.replace(
      /\n*$/,
      '\n'.repeat(minBlankLines + 1),
    )
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
