import { useState } from 'react'
import { useGlicol } from '../hooks/useGlicol'
import './AudioControls.css'

export function AudioControls() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const { glicol, currentCode, gainNode } = useGlicol()

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (gainNode) {
      gainNode.gain.value = newVolume
    }
  }

  return (
    <div className="controls">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="slider"
      />
      <button className="playButton" onClick={handlePlayToggle}>
        {isPlaying ? '⏹' : '▶'}
      </button>
    </div>
  )
}
