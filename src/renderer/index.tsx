import { createRoot } from 'react-dom/client';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
