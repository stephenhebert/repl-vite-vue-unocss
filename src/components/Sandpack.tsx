import {
  SandpackProvider,
  SandpackThemeProvider,
} from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import { SandpackEditor } from './SandpackEditor';
import { getState } from '../utils/state';
import { defaultFiles } from '../config/defaultFiles';

export const Sandpack = () => {

  const state = getState()
  const { 
    files, 
  } = state || {}

  return (
    <SandpackProvider
      // customSetup={{
      //   dependencies: { "unocss": "latest" },
      // }}
      files={files || defaultFiles}
      template="vite-vue-ts"
    >
      <SandpackThemeProvider theme={nightOwl}>
        <SandpackEditor />
      </SandpackThemeProvider>
    </SandpackProvider>
  );
};