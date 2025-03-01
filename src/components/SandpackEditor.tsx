// import Editor from '@monaco-editor/react';
import { setState } from '../utils/state';
import {
  // useActiveCode,
  SandpackPreview,
  SandpackStack,
  SandpackLayout,
  useSandpack,
  SandpackConsole,
  FileTabs,
  SandpackCodeEditor,
} from '@codesandbox/sandpack-react';
import { SandpackFileExplorer } from 'sandpack-file-explorer';
import { useEffect } from 'react';
import { SandpackToolbar } from './SandpackToolbar';

export const SandpackEditor = () => {
  // const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack()
  const { 
    // activeFile, 
    // visibleFiles,
    files 
  } = sandpack

  useEffect(() => {
    const state = { 
      // activeFile, 
      // visibleFiles, 
      files,
      lastModified: Date.now(),
    }
    try {
      setState(state)
    }
    catch (error) {
      console.error('Error saving state: ', error)
    }
  })
  

  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      <SandpackLayout
        style={{ "--sp-layout-height": "100vh" }}
      >
      <div
          className='responsive'
          style={{
            display: 'flex',
            width: '100vw',
            backgroundColor: `var(--sp-colors-surface1)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: '1 1 0%',
              maxWidth: '50vw',
              backgroundColor: `var(--sp-colors-surface1)`,
            }}
          >
            <div
              style={{
                minWidth: '150px',
                maxWidth: '300px',
                overflowX: 'hidden',
                flexShrink: 0,
              }}
            >
              <SandpackFileExplorer />
            </div>
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                overflow: 'hidden',

              }}
            >
              {/* <FileTabs />
              <Editor
                height="100%"
                width="100%"
                defaultLanguage="typescript"
                defaultValue={code}
                theme="vs-dark"
                key={sandpack.activeFile}
                onChange={(value) => {
                  updateCode(value || '');
                }}
              /> */}
              <div style={{ 
                overflowX: 'auto', 
              }}>

                <FileTabs 
                  closableTabs
                  
                />
              </div>
              <div
                style={{ overflowX: 'auto' }}
              >
                <SandpackCodeEditor 
                  style={{ minWidth: 'fit-content' }}
                  showTabs={false}
                  // closableTabs
                  showLineNumbers
                />
              </div>
            </div>
          </div>
          <div style={{ height: '100vh', flex: '1 1 0%', display: 'flex', flexDirection: 'column' }}>
            <SandpackToolbar />
            <SandpackPreview style={{ 
                flexGrow: '1',
              }} 
            />
            <SandpackConsole 
              showHeader
              showSyntaxError
              showResetConsoleButton
              style={{
                height: '200px',
                width: '100%',
                overflow: 'auto',
                backgroundColor: `var(--sp-colors-surface2)`,
              }}
            />
          </div>

        </div>
      </SandpackLayout>
    </SandpackStack>
  );
};