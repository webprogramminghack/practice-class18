import { useEffect } from 'react';

export const ResizeComponent = () => {
  useEffect(() => {
    // birth stage
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log(`Width: ${width}, Height: ${height}`);
    };

    window.addEventListener('resize', handleResize);

    // death stage
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>UnmountingPhaseExample</div>;
};

export const TimeoutComponent = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('Timeout completed');
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  return <div>Check the console</div>;
};
