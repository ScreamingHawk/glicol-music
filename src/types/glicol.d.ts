/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'glicol' {
  export default class Glicol extends Engine {
    constructor(options?: EngineOptions)
  }

  export interface EngineOptions {
    audioContext?: AudioContext
    isLiveCoding?: boolean
    loadSamples?: boolean
    connectTo?: AudioNode
    onLoaded?: () => void
  }

  export interface SampleData {
    code: string
    [key: string]: any
  }

  export class Engine {
    constructor(options?: EngineOptions)

    audioContext: AudioContext
    node: AudioWorkletNode
    sampleBuffers: Record<string, AudioBuffer>

    run(code: string): void
    sendMsg(msg: string): void
    setBPM(bpm: number): void
    liveCodingMode(enabled: boolean): void
    connect(target: AudioNode): void
    reset(): void
    play(obj: Record<string, SampleData>): void
    stop(): void
    showAllSamples(): string

    addSampleFiles(name?: string, url?: string): Promise<void>
    addSampleFromDataArray(
      name: string,
      sample: Float32Array,
      numberOfChannels: number,
      length: number,
      sampleRate: number,
    ): void
    loadSamples(): Promise<void>
  }

  export class NodeChain {
    code: string
    constructor(code: string)
    toString(): string

    // Audio effects
    mul(val: number | string): this
    add(val: number | string): this
    delayms(val: number | string): this
    delayn(val: number): this
    lpf(cutoff: number | string, qvalue: number): this
    hpf(cutoff: number | string, qvalue: number): this
    plate(val: number): this

    // Drum patterns
    bd(val: number): this
    sn(val: number): this
    hh(val: number): this

    // Synthesizers
    sawsynth(attack: number, decay: number): this
    squsynth(attack: number, decay: number): this
    trisynth(attack: number, decay: number): this

    // Sequencing and envelopes
    seq(str: string): this
    adsr(attack: number, decay: number, sustain: number, release: number): this
    sp(sampleName: string): this
    envperc(attack: number, decay: number): this
  }

  // Oscillators and generators
  export function sin(freq: number | string): NodeChain
  export function saw(freq: number | string): NodeChain
  export function tri(freq: number | string): NodeChain
  export function squ(freq: number | string): NodeChain
  export function imp(freq: number): NodeChain
  export function noise(seed: number): NodeChain

  // Utility functions
  export function speed(val: number): NodeChain
  export function seq(str: string): NodeChain
  export function psynth(str: string, span: number): NodeChain
  export function psampler(str: string): NodeChain
  export function sig(param: any): NodeChain
  export function mix(str: string): NodeChain
}
