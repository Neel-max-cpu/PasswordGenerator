import React, { useState } from 'react';

function Slider() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <button 
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600" 
        onClick={() => setValue(value > 0 ? value - 1 : 0)}
      >
        -
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="mx-4 w-64 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(to right, #4ADE80 ${value}%, #D1D5DB ${value}%)`,
        }}
      />
      <button 
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600" 
        onClick={() => setValue(value < 100 ? value + 1 : 100)}
      >
        +
      </button>
    </div>
  );
}

export default Slider;
