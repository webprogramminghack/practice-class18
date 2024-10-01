import React from 'react';
import { Button } from '../Button';

type CounterState = {
  count: number;
};

export class CounterWithClass extends React.Component<
  Record<string, never>,
  CounterState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Current Count: {this.state.count}</h1>

        <Button size='small' variant='primary' onClick={this.incrementCount}>
          Increment
        </Button>
      </div>
    );
  }
}
