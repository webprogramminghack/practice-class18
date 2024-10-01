// import { UserProfile } from './components/2.LearnProps/PassingPropAccordingToType';
// import { PropDrilling } from './components/2.LearnProps/PropDrilling';
// import { InlineStyle } from './components/2.LearnProps/InlineStyle';
// import {
//   CustomButton,
//   CustomButton2,
//   CustomButton3,
// } from './components/2.LearnProps/RestParametersProps';

import { useState } from 'react';
import { TodoListExample } from './components/3.StateAndLifeCycle/ArrayState';
import { CounterProblem } from './components/3.StateAndLifeCycle/CallbackToUpdateState';
import { LifecycleExampleWithClass } from './components/3.StateAndLifeCycle/LifeCycleExampleWithClass';
import { CounterWithClass } from './components/3.StateAndLifeCycle/StateWithClass';
import { CounterWithFunction } from './components/3.StateAndLifeCycle/StateWithFunction';
import {
  ResizeComponent,
  TimeoutComponent,
} from './components/3.StateAndLifeCycle/UnmountingPhaseExample';
import { Button } from './components/Button';

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleToggleComponent = () => {
    setShowComponent((prev) => !prev);
  };

  return (
    <div>
      {/* <UserProfile
        name='John'
        age={25}
        address={{ street: '123', city: 'New York', zip: '12345' }}
      /> */}

      {/* <PropDrilling /> */}

      {/* <CustomButton size='medium' variant='primary'>
        Click me
      </CustomButton>
      <CustomButton2 size='medium' variant='primary'>
        Click me
      </CustomButton2>
      <CustomButton3 size='medium' variant='primary'>
        Click me
      </CustomButton3> */}

      {/* <InlineStyle /> */}

      {/* <CounterWithClass /> */}
      {/* <CounterWithFunction /> */}

      {/* <CounterProblem /> */}

      {/* <TodoListExample /> */}

      {/* <LifecycleExampleWithClass initialCount={0} /> */}

      {/* <LifecycleExampleWithClass initialCount={0} /> */}

      <Button onClick={handleToggleComponent}>Toggle Component</Button>
      {showComponent && <TimeoutComponent />}
    </div>
  );
}

export default App;
