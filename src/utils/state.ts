export interface State {
  // activeFile: string
  files: Record<string, string>
  // visibleFiles: string[]
  // last modified?
}

function setState(value: State | null) {
  const serializedState = JSON.stringify(value || {})
  const encodedState = btoa(serializedState)
  window.location.hash = encodedState
}

function getState(): State | null {
  const hash = window.location.hash
  if (!hash) return null
  const encodedState = hash.split('#')[1]
  const serializedState = atob(encodedState)
  return JSON.parse(serializedState)
}

export { 
  setState, 
  getState,
}