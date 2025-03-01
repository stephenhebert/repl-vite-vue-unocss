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
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        borderBottom: '1px solid #ccc',
        fontSize: '0.75rem',
        minHeight: '42px',
        backgroundColor: 'var(--sp-colors-surface5)',
      }}
    >
      {
        lastModified &&
        <span
          style={{
            color: 'var(--sp-colors-base)',
          }}
        >Last Modified: { new Date(lastModified).toLocaleString() }</span>
      }
      <div
        style={{
          display: 'flex',
          gap: '0.25rem',
        }}
      >
        <button onClick={ undoChanges }>Undo Changes</button>
        <button onClick={ resetToDefault }>Reset to Default Project</button>
        <SandpackToolbarShare />
      </div>
    </div>
  )
}