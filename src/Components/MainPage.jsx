import React, { useState, useEffect } from 'react';
import { CopySlash, RefreshCw } from "lucide-react"

const MainPage = () => {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(50)
  const [useUppercase, setUseUppercase] = useState(true)
  const [useLowercase, setUseLowercase] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(false)


  const generatePassword = () => {
    let charset = ''
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (useNumbers) charset += '0123456789'
    if (useSymbols) charset += '!@#$%^&*()_+{}[]|:;<>,.?/~'

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  useEffect(() => {
    generatePassword()
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols])

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard!')
  }

  const getPasswordStrength = () => {
    if (length > 12 && useUppercase && useLowercase && useNumbers && useSymbols) {
      return 'Very strong'
    } else if (length > 8 && ((useUppercase && useLowercase && useNumbers) || useSymbols)) {
      return 'Strong'
    } else if (length > 6) {
      return 'Medium'
    } else {
      return 'Weak'
    }
  }

  const getStrengthColor = () => {
    const strength = getPasswordStrength();
    switch (strength) {
      case 'Very strong':
        return 'bg-bright-green'; // Bright green
      case 'Strong':
        return 'bg-yellow-500'; // Yellow
      case 'Good':
        return 'bg-bright-yellow'; // Bright yellow
      case 'Weak':
        return 'bg-red-500'; // Red
      case 'Very weak':
        return 'bg-bright-red'; // Bright red
      default:
        return 'bg-gray-200'; // Default gray color
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
                className=" flex-grow mr-2" value={password.length > 21 ? `${password.slice(0, 21)}...` : password}
              />
              <div className={`mx-2 bg-green-500 text-white px-3 py-2 rounded-lg ${getStrengthColor()}`}>
                <span className="text-sm  font-medium text-black">{getPasswordStrength()}</span>
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
