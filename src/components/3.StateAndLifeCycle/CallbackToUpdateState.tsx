import { useState } from 'react';
import { Button } from '../Button';

export const CounterProblem = () => {
  const [count, setCount] = useState(0);

  // const wrongHandleIncrementTwice = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  const correctHandleIncrementTwice = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>

      <Button
        size='small'
        variant='primary'
        onClick={correctHandleIncrementTwice}
      >
        Increment
      </Button>
    </div>
  );
};
