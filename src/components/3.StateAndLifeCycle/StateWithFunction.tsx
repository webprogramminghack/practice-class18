import { useState } from 'react';
import { Button } from '../Button';

export const CounterWithFunction = () => {
  const [count, setCount] = useState(0);

  console.log('function is called');

  return (
    <div>
      <h1>Current Count: {count}</h1>

      <Button
        size='small'
        variant='primary'
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </Button>
    </div>
  );
};
