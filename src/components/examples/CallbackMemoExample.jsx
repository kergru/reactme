/**
 * Demonstrates useCallback together with React.memo to keep child renders stable.
 */
import { memo, useCallback, useRef, useState } from 'react';

const MemoizedAction = memo(function MemoizedAction({ onAction }) {
  return (
    <div className="memo-child">
      <p>Memoized child receives the stable callback prop.</p>
      <button type="button" onClick={onAction}>
        Memoized child action
      </button>
    </div>
  );
});

export const callbackMemoCode = `const MemoizedAction = memo(function MemoizedAction({ onAction }) {
  return <button onClick={onAction}>Run action</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be recreated on every
  // parent render and React.memo would see a changed prop.
  const handleAction = useCallback(() => {
    setCount((value) => value + 1);
  }, []);

  return <MemoizedAction onAction={handleAction} />;
}`;

export function CallbackMemoExample() {
  const [count, setCount] = useState(0);
  const [parentRenders, setParentRenders] = useState(0);
  const [identityStatus, setIdentityStatus] = useState('not checked yet');

  const handleAction = useCallback(() => {
    setCount((value) => value + 1);
  }, []);

  const previousActionRef = useRef(handleAction);

  const updateParentOnly = () => {
    setIdentityStatus(previousActionRef.current === handleAction ? 'unchanged' : 'changed');
    previousActionRef.current = handleAction;
    setParentRenders((value) => value + 1);
  };

  return (
    <div className="stack">
      <strong className="metric">{count}</strong>
      <p className="hint">Parent updates: {parentRenders}</p>
      <p className="hint">Callback identity: {identityStatus}</p>
      <p className="hint">
        Click "Update parent only": the parent changes, but useCallback returns the same function
        reference, so React.memo can keep the child from rendering again.
      </p>
      <div className="button-row">
        <MemoizedAction onAction={handleAction} />
        <button type="button" onClick={updateParentOnly}>
          Update parent only
        </button>
      </div>
    </div>
  );
}

export const callbackMemoExample = {
  title: 'useCallback and React.memo',
  description:
    'useCallback preserves function identity between renders, and React.memo skips child renders when props stay equal.',
  code: callbackMemoCode,
  demo: <CallbackMemoExample />
};
