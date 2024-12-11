import { useEffect, useState } from 'react'
import './App.css'
import { AudioControls } from './components/AudioControls'
import { Editor } from './components/Editor'
import { GlicolProvider } from './providers/GlicolProvider'

function App() {
  const [initialContent, setInitialContent] = useState('')

  useEffect(() => {
    fetch('/music/track_001.glicol')
      .then((response) => response.text())
      .then((data) => setInitialContent(data))
      .catch((error) => console.error('Error loading file:', error))
  }, [])

  return (
    <GlicolProvider>
      <div className="app">
        <AudioControls />
        <div className="editor-container">
          <Editor initialContent={initialContent} />
        </div>
      </div>
    </GlicolProvider>
  )
}

export default App
