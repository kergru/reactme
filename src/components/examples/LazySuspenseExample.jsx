/**
 * Demonstrates React.lazy and Suspense for code-splitting UI behind a fallback.
 */
import { Suspense, lazy, useState } from 'react';

const LazyDetails = lazy(() =>
  Promise.resolve({
    default: function DetailsPanel() {
      return (
        <div className="demo-card">
          <h3>Lazy details loaded</h3>
          <p>This component was rendered through React.lazy inside Suspense.</p>
        </div>
      );
    }
  })
);

export const lazySuspenseCode = `const LazyDetails = lazy(() => import('./DetailsPanel.jsx'));

function DetailsLoader() {
  const [open, setOpen] = useState(false);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {open && <LazyDetails />}
    </Suspense>
  );
}`;

export function LazySuspenseExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="stack">
      <button type="button" onClick={() => setOpen((value) => !value)}>
        {open ? 'Hide lazy panel' : 'Load lazy panel'}
      </button>
      <Suspense fallback={<p className="hint">Loading lazy panel...</p>}>
        {open && <LazyDetails />}
      </Suspense>
    </div>
  );
}

export const lazySuspenseExample = {
  title: 'React.lazy and Suspense',
  description: 'React.lazy defers component loading while Suspense renders a fallback.',
  code: lazySuspenseCode,
  demo: <LazySuspenseExample />
};
