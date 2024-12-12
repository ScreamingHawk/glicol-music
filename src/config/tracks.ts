export interface Track {
  id: string
  name: string
  path: string
}

export const tracks: Track[] = [
  { id: '1', name: 'Track 1', path: '/music/track_001.glicol' },
  { id: '2', name: 'Track 2', path: '/music/track_002.glicol' },
  { id: '3', name: 'Track 3', path: '/music/track_003.glicol' },
  { id: '4', name: 'Track 4', path: '/music/track_004.glicol' },
]

export const defaultTrackId = '3'
