import { useEffect, useState } from 'react'
import './App.css'
import { AudioControls } from './components/AudioControls'
import { Editor } from './components/Editor'
import { Menu } from './components/Menu'
import { defaultTrackId, tracks } from './config/tracks'
import { GlicolProvider } from './providers/GlicolProvider'

function App() {
  const [initialContent, setInitialContent] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedTrackId, setSelectedTrackId] = useState(defaultTrackId)

  useEffect(() => {
    const track = tracks.find((t) => t.id === selectedTrackId)
    if (!track) return

    fetch(track.path)
      .then((response) => response.text())
      .then((data) => setInitialContent(data))
      .catch((error) => console.error('Error loading file:', error))
  }, [selectedTrackId])

  const handleTrackSelect = (trackId: string) => {
    setSelectedTrackId(trackId)
    setIsMenuOpen(false) // Close menu after selection
  }

  return (
    <GlicolProvider>
      <div className="app">
        <Menu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          tracks={tracks}
          selectedTrackId={selectedTrackId}
          onTrackSelect={handleTrackSelect}
        />
        <div className={`main-content ${isMenuOpen ? 'menu-open' : ''}`}>
          <AudioControls />
          <div className="editor-container">
            <Editor initialContent={initialContent} />
          </div>
        </div>
      </div>
    </GlicolProvider>
  )
}

export default App
