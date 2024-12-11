import Glicol from 'glicol'
import { ReactNode, useEffect, useState } from 'react'
import { GlicolContext, GlicolContextType } from '../contexts/GlicolContext'

export function GlicolProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GlicolContextType>({
    glicol: null,
    isReady: false,
    gainNode: null,
    currentCode: '',
    setCurrentCode: (code: string) => {
      setState((prev) => {
        if (prev.glicol) {
          prev.glicol.run(code)
        }
        return { ...prev, currentCode: code }
      })
    },
  })

  useEffect(() => {
    const instance = new Glicol({
      onLoaded: () => {
        // Create a gain node and connect it
        const ctx = instance.audioContext
        const gain = ctx.createGain()
        gain.gain.value = 1

        // Disconnect any existing connections
        instance.node.disconnect()

        // Make new connections
        instance.node.connect(gain)
        gain.connect(ctx.destination)

        setState((prev) => ({
          ...prev,
          glicol: instance,
          isReady: true,
          gainNode: gain,
        }))
      },
    })

    // Cleanup function
    return () => {
      if (instance.node) {
        instance.node.disconnect()
      }
    }
  }, [])

  return (
    <GlicolContext.Provider value={state}>{children}</GlicolContext.Provider>
  )
}
