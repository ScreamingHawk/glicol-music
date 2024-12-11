import { useContext } from 'react'
import { GlicolContext } from '../contexts/GlicolContext'

export function useGlicol() {
  const context = useContext(GlicolContext)
  if (context === undefined) {
    throw new Error('useGlicol must be used within a GlicolProvider')
  }
  return context
}
