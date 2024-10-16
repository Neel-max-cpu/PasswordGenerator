import React, { useState, useEffect } from 'react';

const MainPage = ({
  password, setPassword, length, setLength,
  useUppercase, setUseUppercase, useLowercase, setUseLowercase,
  useNumbers, setUseNumbers, useSymbols, setUseSymbols,passwordLength,setPasswordLength
}) => {

  // const [password, setPassword] = useState('')
  // const [length, setLength] = useState(50)
  // const [useUppercase, setUseUppercase] = useState(true)
  // const [useLowercase, setUseLowercase] = useState(true)
  // const [useNumbers, setUseNumbers] = useState(true)
  // const [useSymbols, setUseSymbols] = useState(false)


  const generatePassword = () => {
    let charset = ''
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (useNumbers) charset += '0123456789'
    if (useSymbols) charset += '!@#$%^&*()_+{}[]|:;<>,.?/~'

    let newPassword = ''    
    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  useEffect(() => {
    generatePassword()  
  }, [passwordLength, useUppercase, useLowercase, useNumbers, useSymbols])

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard!')
  }

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

  const getStrengthColor = () => {
    const strength = getPasswordStrength();
    switch (strength) {
      case 'Very strong':
        return 'bg-green-500'; 
      case 'Strong':
        return 'bg-green-500'; 
      case 'Good':
        return 'bg-yellow-500'; 
      case 'Weak':
        return 'bg-red-500'; 
      case 'Very Weak':
        return 'bg-red-500';     
      default:
        return 'bg-gray-200'; 
    }
  };

  return (
    <>
      <div className='items-center'>
        <h1 className='mt-20 text-black text-center text-6xl font-semibold'>Random Password Generator</h1>
        <h3 className='mt-5 text-yellow-400 text-center font-custom'>Create strong and secure passwords to keep your account safe online.</h3>

        <div className="mt-10 flex justify-center ml-15 mx-2">
          <div className='flex mx-2'>
            <div className="flex items-center space-x-2 ml-10  mr-2 border-2 border-black rounded-lg px-1 py-1 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input
                className="text-xl flex-grow mr-2" value={password.length > 21 ? `${password.slice(0, 21)}...` : password}
              />
              <div className={`mx-2 bg-green-500 text-white px-3 py-2 rounded-lg ${getStrengthColor()}`}>
                <span className="text-sm  font-medium text-white">{getPasswordStrength()}</span>
              </div>
            </div>
            <button onClick={copyPassword} className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 text-base" >
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
