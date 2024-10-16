import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import Down from './Components/Down';
import { useEffect, useState } from 'react';


function App() {

  const [password, setPassword] = useState('');  
  const [passwordLength, setPasswordLength] = useState(15); 
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);


  const getPasswordStrength = () => {    
    if (passwordLength > 12 && (useUppercase || useLowercase) && (useNumbers || useSymbols)) {
      return 'Very strong'    
    } else if (passwordLength > 8 && (useUppercase || useLowercase) && (useNumbers || useSymbols)) {
      return 'Strong'    
    } else if (passwordLength > 6) {
      return 'Good'
    } else if (passwordLength > 4) {
      return 'Weak'
    } else {
      return 'Very Weak'
    }
  }

  const passwordStrength = getPasswordStrength();


  return (
    <div>
      <MainPage
      passwordLength={passwordLength}
      setPasswordLength={setPasswordLength}
      password={password}
      setPassword={setPassword}
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
      passwordLength={passwordLength}
      setPasswordLength={setPasswordLength}
      password={password}      
      useUppercase={useUppercase}
      setUseUppercase={setUseUppercase}
      useLowercase={useLowercase}
      setUseLowercase={setUseLowercase}
      useNumbers={useNumbers}
      setUseNumbers={setUseNumbers}
      useSymbols={useSymbols}
      setUseSymbols={setUseSymbols}
      passwordStrength={passwordStrength}
      />
      
    </div>
  );
}

export default App;
