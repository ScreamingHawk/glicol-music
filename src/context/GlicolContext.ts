import Glicol from 'glicol'
import { createContext } from 'react'

export interface GlicolContextType {
  glicol: Glicol | null
  isReady: boolean
  gainNode: GainNode | null
  setCurrentCode: (code: string) => void
  currentCode: string
}

export const GlicolContext = createContext<GlicolContextType>({
  glicol: null,
  isReady: false,
  gainNode: null,
  setCurrentCode: () => {},
  currentCode: '',
})
