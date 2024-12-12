import { FC } from 'react'
import './Menu.css'
import { Track } from '../config/tracks'

interface MenuProps {
  isOpen: boolean
  onToggle: () => void
  tracks: Track[]
  selectedTrackId: string
  onTrackSelect: (trackId: string) => void
}

export const Menu: FC<MenuProps> = ({ 
  isOpen, 
  onToggle, 
  tracks, 
  selectedTrackId, 
  onTrackSelect 
}) => {
  return (
    <>
      <button className="hamburger" onClick={onToggle}>
        <span className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {tracks.map((track) => (
            <li 
              key={track.id}
              className={track.id === selectedTrackId ? 'selected' : ''}
              onClick={() => onTrackSelect(track.id)}
            >
              {track.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
} 
