import { encode, decode } from './base64'
import type { SandpackBundlerFiles } from "@codesandbox/sandpack-client";


export interface State {
  // activeFile: string
  files: SandpackBundlerFiles
  // visibleFiles: string[]
  lastModified: number
}

function setState(value: State | null) {
  const serializedState = JSON.stringify(value || {})
  const encodedState = encode(serializedState)
  window.location.hash = encodedState
}

function getState(): State | null {
  const hash = window.location.hash
  if (!hash) return null
  try {
    const encodedState = hash.split('#')[1]
    const serializedState = decode(encodedState)
    return JSON.parse(serializedState)
  }
  catch (error) {}
}

export { 
  setState, 
  getState,
}