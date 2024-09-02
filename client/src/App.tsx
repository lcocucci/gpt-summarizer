import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Summarizer from './Components/Summarizer';
import RenderTextEffect from './Components/RenderTextEffect';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Summarizer></Summarizer>
      <RenderTextEffect text="hola"></RenderTextEffect>
    </>
  );
}

export default App;
