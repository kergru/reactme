/**
 * Demonstrates useEffect for lifecycle-style side effects and cleanup.
 */
import { useEffect, useState } from 'react';

export const effectCode = `function ClockStatus() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>Active for {seconds}s</p>;
}`;

export function EffectExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="status-box">
      <span className="pulse" />
      <p>Component active for {seconds}s</p>
    </div>
  );
}

export const effectExample = {
  title: 'useEffect',
  description: 'Side effects run after rendering and can clean up after themselves.',
  code: effectCode,
  demo: <EffectExample />
};
