import { 
  useSandpack,
} from '@codesandbox/sandpack-react';
import { setState } from '../utils/state';
import { SandpackToolbarShare } from './SandpackToolbarShare';

export const SandpackToolbar = () => {
  const { sandpack } = useSandpack()

  const undoChanges = () => {
    sandpack.resetAllFiles()
  }

  const empty = () => {
    setState()
    window.location.reload()
  }



  return (
    <div>
      <button onClick={ undoChanges }>Undo Changes</button>
      <button onClick={ empty }>Empty</button>
      <SandpackToolbarShare />
    </div>
  )
}