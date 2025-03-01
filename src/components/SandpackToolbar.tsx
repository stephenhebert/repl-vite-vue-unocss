import { 
  useSandpack,
} from '@codesandbox/sandpack-react';
import { 
  getState,
  setState,
} from '../utils/state';
import { SandpackToolbarShare } from './SandpackToolbarShare';

export const SandpackToolbar = () => {
  const { sandpack } = useSandpack()
  const { lastModified } = getState() || {}

  const undoChanges = () => {
    sandpack.resetAllFiles()
  }

  const resetToDefault = () => {
    setState()
    window.location.reload()
  }



  return (
    <div>
      {
        lastModified &&
        <span>Last Modified: { new Date(lastModified).toLocaleString() }</span>
      }
      <button onClick={ undoChanges }>Undo Changes</button>
      <button onClick={ resetToDefault }>Reset to Default Project</button>
      <SandpackToolbarShare />
    </div>
  )
}