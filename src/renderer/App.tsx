/* eslint-disable react/function-component-definition */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.css';
import { ButtonGroup } from './components/ButtonGroup';
import { InputText } from './components/TextArea';
import { ChangeEvent, useState } from 'react';

export type SaveState = 'saved' | 'editing' | 'fail';

function MainWindow() {
  const INIT_SIZE = 18;
  const [fontSize, useFontSize] = useState(INIT_SIZE);
  const [text, setText] = useState('');
  const [alreadySaved, setAlreadySaved] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  const [saveState, setSaveState] = useState<SaveState>('saved');

  const onPlusClick = () => useFontSize(fontSize + 2);
  const onMinusClick = () => useFontSize(fontSize - 2);
  const onResizeClick = () => useFontSize(INIT_SIZE);
  const onSaveClick = () => {
    if (alreadySaved) {
      window.electron.ipcRenderer.sendMessage('save', text);
    } else {
      setAlreadySaved(true);
      window.electron.ipcRenderer.sendMessage('first-save', text);
    }
    setIsChanged(false);
  };
  const captureText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // setIsChanged(true);
    setSaveState('editing');
    setText(e.target.value);
  };
  window.electron.ipcRenderer.on('save-state', (state) => {
    if (state === 'success') setSaveState('saved');
    if (state === 'fail') setSaveState('fail');
  });
  return (
    <div>
      <ButtonGroup
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
        onResizeClick={onResizeClick}
        onSaveClick={onSaveClick}
        isChanged={isChanged}
        saveState={saveState}
      />
      <InputText
        resize="vertical"
        size="large"
        placeholder="Input text..."
        onChange={captureText}
        textarea={{ style: { fontSize: `${fontSize}px` } }}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWindow />} />
      </Routes>
    </Router>
  );
}
