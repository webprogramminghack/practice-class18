import React from 'react';

type GreetingWithFunctionProps = {
  name?: string;
};

export const GreetingWithFunction: React.FC<GreetingWithFunctionProps> = ({
  name = 'John',
}) => {
  return <h1>Hello, {name}</h1>;
  // return { name, hobby: 'gaming' } as Record<string, string>;
};

export function GreetingWithFunctionNonExpression({
  name = 'John',
}: GreetingWithFunctionProps) {
  return <h1>Hello, {name}</h1>;
  // return { name, hobby: 'gaming' } as Record<string, string>;
}
