 'use client'
import React, { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState<any>('');
  const [selectedOption, setSelectedOption] = useState('fahrenheit');
  const [result, setResult] = useState('');

  const Submitted = () => {
    if (number === '') {
      alert('Please enter a valid input.');
      return;
    }

    if (selectedOption === 'fahrenheit') {
      const Res = (number * 9) / 5 + 32;
      setResult(Res.toFixed(3));
    } else {
      const Res1 = (number - 32) * (5 / 9);
      setResult(Res1.toFixed(3));
    }
  };

  const Reset = () => {
    setNumber('')
    setResult('')
    setSelectedOption('')
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree"> 
          Degree
        </label>
        <input
          className=" border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          id="degree"
          type="number"
          value={number}    
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
          Type:
        </label>
        <select
          className=" border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          id="type"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="fahrenheit">Fahrenheit</option>
          <option value="celsius">Celsius</option>
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={Submitted}
      >
        Submit
      </button>
      <button
        className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={Reset}
      >
        Reset
      </button>
      <div className="mt-4">
        <div className="font-bold">Result:</div>
        <div className="text-xl">{result}</div>
      </div>
    </div>
  );
};

export default App;


