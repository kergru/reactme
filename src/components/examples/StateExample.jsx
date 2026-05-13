/**
 * Demonstrates local component state with useState and user-triggered updates.
 */
import { useState } from 'react';

export const stateCode = `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}`;

export function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="stack">
      <strong className="metric">{count}</strong>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment counter
      </button>
    </div>
  );
}

export const stateExample = {
  title: 'JSX and State',
  description: 'useState stores UI state and triggers a re-render.',
  code: stateCode,
  demo: <CounterExample />
};
