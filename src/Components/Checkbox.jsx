import React from 'react';

const Checkbox = ({ id, checked, onCheckedChange, label }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="form-checkbox h-4 w-4 text-blue-500"
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;
