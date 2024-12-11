import { useContext } from 'react'
import { GlicolContext } from '../context/GlicolContext'

export function useGlicol() {
  const context = useContext(GlicolContext)
  if (context === undefined) {
    throw new Error('useGlicol must be used within a GlicolProvider')
  }
  return context
}
