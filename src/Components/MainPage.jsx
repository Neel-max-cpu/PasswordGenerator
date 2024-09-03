import React from 'react';

const MainPage = () => {
  return (
    <>
      <div className='items-center'>
        <h1 className='mt-20 text-white text-center text-6xl font-semibold'>Random Password Generator</h1>
        <h3 className='mt-5 text-yellow-400 text-center font-custom'>Create strong and secure passwords to keep your account safe online.</h3>

        <div className="mt-10 flex justify-center ml-15">
          <form className="flex items-center space-x-2 ml-10">
            <input
              className="border border-gray-300 rounded-lg px-2 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm" type="submit">
              Copy
            </button>
          </form>
        </div>

      </div>
    </>
  );
}

export default MainPage;
