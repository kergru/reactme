/**
 * Demonstrates useMemo for caching derived values from component state.
 */
import { useMemo, useState } from 'react';

const products = [
  'React Router',
  'Redux Toolkit',
  'Vitest',
  'Testing Library',
  'MSW',
  'Context API'
];

export const memoCode = `function FilteredList() {
  const [query, setQuery] = useState('');

  const matches = useMemo(() => {
    return products.filter((product) =>
      product.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return <p>{matches.length} matches</p>;
}`;

export function MemoExample() {
  const [query, setQuery] = useState('');

  const matches = useMemo(() => {
    return products.filter((product) =>
      product.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [query]);

  return (
    <div className="stack">
      <label className="field-label">
        Filter tools
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try react" />
      </label>
      <p className="hint">{matches.length} matching tools</p>
      <ul className="compact-list">
        {matches.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export const memoExample = {
  title: 'useMemo',
  description: 'useMemo caches derived data until its dependencies change.',
  code: memoCode,
  demo: <MemoExample />
};
