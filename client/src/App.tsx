import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Summarizer from './Components/Summarizer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Summarizer></Summarizer>
    </>
  );
}

export default App;
