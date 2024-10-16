import React, { useEffect, useState } from 'react';

function Slider({onChangeLength}) {
  const [value, setValue] = useState(15);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChangeLength(newValue);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <button 
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600" 
        onClick={() => {
          const newValue = value > 1 ? value - 1 : 1;
          setValue(newValue);
          onChangeLength(newValue);
        }}
      >
        -
      </button>
      <input
        type="range"
        min="1"
        max="50"
        value={value}
        onChange={handleChange}
        className="mx-4 w-64 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(to right, #4ADE80 ${value*2}%, #D1D5DB ${value*2}%)`,
        }}
      />
      <button 
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600" 
        onClick={() => {
          const newValue = value < 50 ? value + 1 : 50;
          setValue(newValue);
          onChangeLength(newValue);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Slider;
