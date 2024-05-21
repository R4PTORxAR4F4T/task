import React, { useState } from 'react';
import './App.css';

const AlphabetGrid = () => {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    let newOutputString = outputString + letter;
    newOutputString = checkLetters(newOutputString);
    setOutputString(newOutputString);
  };

  const checkLetters = (str) => {
    return str.replace(/(\w)\1{2,}/g, (match) => '_'.repeat(match.length));
  };

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <div>
      <div className="grid-container">
        {letters.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <AlphabetGrid />
    </div>
  );
}

export default App;
