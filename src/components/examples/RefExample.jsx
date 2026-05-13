/**
 * Demonstrates useRef for direct DOM access without storing data in React state.
 */
import { useRef } from 'react';

export const refCode = `function FocusInput() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current?.focus()}>
        Focus input
      </button>
    </>
  );
}`;

export function RefExample() {
  const inputRef = useRef(null);

  return (
    <div className="stack">
      <label className="field-label">
        Search term
        <input ref={inputRef} placeholder="Focus me with the button" />
      </label>
      <button type="button" onClick={() => inputRef.current?.focus()}>
        Focus input
      </button>
    </div>
  );
}

export const refExample = {
  title: 'useRef',
  description: 'useRef stores a mutable value and can point at DOM nodes without causing re-renders.',
  code: refCode,
  demo: <RefExample />
};
