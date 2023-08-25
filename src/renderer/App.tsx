/* eslint-disable react/function-component-definition */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
// import './App.css';
import { ButtonGroup } from './components/ButtonGroup';

function MainWindow() {
  return (
    <div>
      <ButtonGroup />
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
