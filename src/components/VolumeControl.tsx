import { useEffect, useState } from 'react'
import { useGlicol } from '../hooks/useGlicol'
import './VolumeControl.css'

export function VolumeControl() {
  const [volume, setVolume] = useState(1)
  const { gainNode } = useGlicol()

  useEffect(() => {
    if (gainNode) {
      gainNode.gain.value = volume
    }
  }, [gainNode, volume])

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (gainNode) {
      gainNode.gain.value = newVolume
    }
  }

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolumeChange}
      className="slider"
    />
  )
}
