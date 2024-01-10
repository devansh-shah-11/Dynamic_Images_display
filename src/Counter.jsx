import React, { useState } from 'react';

function Counter({ onCounterChange }) {
  const [counter, setCounter] = useState(1);

  const AddCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter === 50){
          alert('Counter cannot be more than 10!');
          return prevCounter;
      }
      else{
        const newCounter = prevCounter + 1;
        onCounterChange(newCounter);
        return newCounter;
      }
    });
  };

  const SubtractCounter = () => {
    setCounter((prevCounter) => {
      if (prevCounter === 1){
          alert('Counter cannot be less than 1!');
          return prevCounter;
      }
      else{
        const newCounter = prevCounter - 1;
        onCounterChange(newCounter);
        return newCounter;
      }
    });
  };

  console.log('rendering...', counter);

  return (
    <div>
      <button onClick={AddCounter}>+</button>
      {'\t'}
      <span>{counter}</span>
      {'\t'}
      <button onClick={SubtractCounter}>-</button>
      <br />
    </div>
  );
}

export default Counter;
