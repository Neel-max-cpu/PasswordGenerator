import React, { useState } from 'react';

const MainPage = () => {

    const [inputValue, setInputValue] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    // Handle copy button click
    const handleCopy = (e) => {
      e.preventDefault(); // Prevent the default form submission

      // Copy the input value to clipboard
      navigator.clipboard.writeText(inputValue).then(() => {
        alert('Copied to clipboard!'); // Optional: Show an alert when copied
      }).catch(() => {
        alert('Failed to copy!'); // Optional: Handle error case
      });
    };


  return (
    <>
      <div className='items-center'>
        <h1 className='mt-20 text-black text-center text-6xl font-semibold'>Random Password Generator</h1>
        <h3 className='mt-5 text-yellow-400 text-center font-custom'>Create strong and secure passwords to keep your account safe online.</h3>

        <div className="mt-10 flex justify-center ml-15">
          <form className="flex items-center space-x-2 ml-10">
            <input
              className="border-2 border-black rounded-lg px-3 py-1 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <button className="bg-purple-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 text-sm" type="copy">
              Copy
            </button>
          </form>
        </div>

      </div>
    </>
  );
}

export default MainPage;
