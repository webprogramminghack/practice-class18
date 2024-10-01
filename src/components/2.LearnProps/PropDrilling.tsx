type User = { name: string; age: number };
type ParentProps = { user: User };

export function PropDrilling() {
  const user = { name: 'Alice', age: 30 };
  return <Parent user={user} />;
}

function Parent({ user }: ParentProps) {
  return <Child user={user} />;
}

function Child({ user }: ParentProps) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }: ParentProps) {
  return (
    <h1>
      Hello, {user.name}! You are now {user.age} years old.
    </h1>
  );
}
