import { useState } from 'react'
import { useGlicol } from '../hooks/useGlicol'
import './PlayControls.css'
import { VolumeControl } from './VolumeControl'

export function PlayControls() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { glicol, currentCode } = useGlicol()

  const handlePlayToggle = () => {
    const newState = !isPlaying
    setIsPlaying(newState)

    if (glicol) {
      if (newState) {
        glicol.run(currentCode)
      } else {
        glicol.stop()
      }
    }
  }

  return (
    <div className="controls">
      <VolumeControl />
      <button className="playButton" onClick={handlePlayToggle}>
        {isPlaying ? '⏹️' : '▶️'}
      </button>
    </div>
  )
}
