/**
 * Demonstrates extracting reusable stateful logic into a custom hook.
 */
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [enabled, setEnabled] = useState(initialValue);
  const toggle = () => setEnabled((value) => !value);
  return { enabled, toggle };
}

export const customHookCode = `function useToggle(initialValue = false) {
  const [enabled, setEnabled] = useState(initialValue);
  const toggle = () => setEnabled((value) => !value);

  return { enabled, toggle };
}

function NotificationsToggle() {
  const { enabled, toggle } = useToggle(true);
  return <button onClick={toggle}>{enabled ? 'On' : 'Off'}</button>;
}`;

export function CustomHookExample() {
  const { enabled, toggle } = useToggle(true);

  return (
    <div className="stack">
      <span className={`status-pill ${enabled ? 'on' : 'off'}`}>
        Notifications {enabled ? 'on' : 'off'}
      </span>
      <button type="button" onClick={toggle}>Toggle notifications</button>
    </div>
  );
}

export const customHookExample = {
  title: 'Custom Hooks',
  description: 'Custom hooks package reusable stateful behavior behind a regular function call.',
  code: customHookCode,
  demo: <CustomHookExample />
};
