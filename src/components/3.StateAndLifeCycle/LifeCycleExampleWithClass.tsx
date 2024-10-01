import React from 'react';

type LifecycleProps = {
  initialCount: number;
};

type LifecycleState = {
  counter: number;
};

export class LifecycleExampleWithClass extends React.Component<
  LifecycleProps,
  LifecycleState
> {
  intervalId: number | undefined;

  constructor(props: LifecycleProps) {
    super(props);

    this.state = {
      counter: props.initialCount ?? 0,
    };
  }

  // birth stage
  componentDidMount() {
    this.intervalId = window.setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  // growth stage
  componentDidUpdate(_: unknown, prevState: LifecycleState) {
    if (prevState.counter !== this.state.counter) {
      console.log('Current state', this.state.counter);
    }
  }

  // death stage
  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <h1>Class Lifecycle</h1>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}
