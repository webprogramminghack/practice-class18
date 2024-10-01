import React from 'react';

type GreetingWithClassProps = {
  name: string;
};

export class GreetingWithClass extends React.Component<GreetingWithClassProps> {
  static defaultProps = {
    name: 'John',
  };

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
