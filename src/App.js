import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import Down from './Components/Down';
import { useEffect, useState } from 'react';


function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(50);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);


  return (
    <div>
      <MainPage
      password={password}
      setPassword={setPassword}
      length={length}
      setLength={setLength}
      useUppercase={useUppercase}
      setUseUppercase={setUseUppercase}
      useLowercase={useLowercase}
      setUseLowercase={setUseLowercase}
      useNumbers={useNumbers}
      setUseNumbers={setUseNumbers}
      useSymbols={useSymbols}
      setUseSymbols={setUseSymbols}
      />

      <Down
      password={password}
      length={length}
      useUppercase={useUppercase}
      setUseUppercase={setUseUppercase}
      useLowercase={useLowercase}
      setUseLowercase={setUseLowercase}
      useNumbers={useNumbers}
      setUseNumbers={setUseNumbers}
      useSymbols={useSymbols}
      setUseSymbols={setUseSymbols}
      />
      
    </div>
  );
}

export default App;
