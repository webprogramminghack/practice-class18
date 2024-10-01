import React, { useEffect, useState } from 'react';

type LifecycleProps = {
  initialCount: number;
};

export const LifeCycleExampleWithFunction: React.FC<LifecycleProps> = ({
  initialCount = 0,
}) => {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log('Current state', counter);
  }, [counter]);

  return (
    <div>
      <h1>Class Lifecycle</h1>
      <p>Counter: {counter}</p>
    </div>
  );
};
