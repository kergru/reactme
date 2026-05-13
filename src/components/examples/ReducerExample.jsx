/**
 * Demonstrates useReducer for local state with explicit action transitions.
 */
import { useReducer } from 'react';

const initialState = {
  step: 1,
  accepted: false
};

function wizardReducer(state, action) {
  switch (action.type) {
    case 'next':
      return { ...state, step: Math.min(3, state.step + 1) };
    case 'back':
      return { ...state, step: Math.max(1, state.step - 1) };
    case 'toggleAccepted':
      return { ...state, accepted: !state.accepted };
    default:
      return state;
  }
}

export const reducerCode = `function wizardReducer(state, action) {
  switch (action.type) {
    case 'next':
      return { ...state, step: state.step + 1 };
    case 'toggleAccepted':
      return { ...state, accepted: !state.accepted };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(wizardReducer, initialState);`;

export function ReducerExample() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  return (
    <div className="stack">
      <strong className="metric">{state.step}</strong>
      <p className="hint">Wizard step {state.step} of 3</p>
      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={state.accepted}
          onChange={() => dispatch({ type: 'toggleAccepted' })}
        />
        Accepted terms
      </label>
      <div className="button-row">
        <button type="button" onClick={() => dispatch({ type: 'back' })}>Back</button>
        <button type="button" onClick={() => dispatch({ type: 'next' })}>Next</button>
      </div>
    </div>
  );
}

export const reducerExample = {
  title: 'useReducer',
  description: 'useReducer keeps complex local state changes explicit and testable.',
  code: reducerCode,
  demo: <ReducerExample />
};
