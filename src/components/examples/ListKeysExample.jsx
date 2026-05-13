/**
 * Demonstrates stable keys when rendering and reordering lists.
 */
import { useState } from 'react';

const initialTasks = [
  { id: 'route', label: 'Routing' },
  { id: 'state', label: 'State' },
  { id: 'tests', label: 'Tests' }
];

export const listKeysCode = `const tasks = [
  { id: 'route', label: 'Routing' },
  { id: 'state', label: 'State' }
];

return (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>{task.label}</li>
    ))}
  </ul>
);`;

export function ListKeysExample() {
  const [tasks, setTasks] = useState(initialTasks);

  const rotate = () => {
    setTasks(([first, ...rest]) => [...rest, first]);
  };

  const removeFirst = () => {
    setTasks((current) => current.slice(1));
  };

  const reset = () => setTasks(initialTasks);

  return (
    <div className="stack">
      <ul className="compact-list">
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
      <div className="button-row">
        <button type="button" onClick={rotate} disabled={tasks.length < 2}>Rotate</button>
        <button type="button" onClick={removeFirst} disabled={tasks.length === 0}>Remove first</button>
        <button type="button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export const listKeysExample = {
  title: 'Lists and Keys',
  description: 'Stable keys let React preserve item identity while lists change order or length.',
  code: listKeysCode,
  demo: <ListKeysExample />
};
