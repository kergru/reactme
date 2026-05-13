/**
 * Exercises the example components with Vitest, React Testing Library, Redux,
 * and MSW so the guide's testing section has executable coverage.
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';
import { fetchUser } from '../../api/user.js';
import { rootReducer, store } from '../../store.js';
import { CallbackMemoExample } from './CallbackMemoExample.jsx';
import { CustomHookExample } from './CustomHookExample.jsx';
import { DataFetchingExample } from './DataFetchingExample.jsx';
import { ProfileFormExample } from './ControlledFormExample.jsx';
import { LazySuspenseExample } from './LazySuspenseExample.jsx';
import { ListKeysExample } from './ListKeysExample.jsx';
import { MemoExample } from './MemoExample.jsx';
import { PortalExample } from './PortalExample.jsx';
import { ReducerExample } from './ReducerExample.jsx';
import { CounterExample } from './StateExample.jsx';

const server = setupServer(
  http.get('/api/user', () => HttpResponse.json({ name: 'John Doe' })),
  http.get('/api/profile', () => HttpResponse.json({ name: 'Ada Lovelace' }))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Counter increments the visible value', async () => {
  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <CounterExample />
    </Provider>
  );

  await user.click(screen.getByRole('button', { name: /increment counter/i }));

  expect(screen.getByText('1')).toBeInTheDocument();
});

test('Controlled form shows the valid state', async () => {
  const user = userEvent.setup();
  render(<ProfileFormExample />);

  await user.type(screen.getByLabelText(/email/i), 'ada@example.com');

  expect(screen.getByText(/valid input/i)).toBeInTheDocument();
});

test('useMemo example filters the visible list', async () => {
  const user = userEvent.setup();
  render(<MemoExample />);

  await user.type(screen.getByLabelText(/filter tools/i), 'redux');

  expect(screen.getByText('1 matching tools')).toBeInTheDocument();
  expect(screen.getByText('Redux Toolkit')).toBeInTheDocument();
  expect(screen.queryByText('React Router')).not.toBeInTheDocument();
});

test('useReducer example applies explicit action transitions', async () => {
  const user = userEvent.setup();
  render(<ReducerExample />);

  await user.click(screen.getByRole('button', { name: /next/i }));
  await user.click(screen.getByLabelText(/accepted terms/i));

  expect(screen.getByText('Wizard step 2 of 3')).toBeInTheDocument();
  expect(screen.getByLabelText(/accepted terms/i)).toBeChecked();
});

test('Custom hook example toggles reusable state', async () => {
  const user = userEvent.setup();
  render(<CustomHookExample />);

  await user.click(screen.getByRole('button', { name: /toggle notifications/i }));

  expect(screen.getByText(/notifications off/i)).toBeInTheDocument();
});

test('Lazy Suspense example renders the lazy panel on demand', async () => {
  const user = userEvent.setup();
  render(<LazySuspenseExample />);

  await user.click(screen.getByRole('button', { name: /load lazy panel/i }));

  expect(await screen.findByText(/lazy details loaded/i)).toBeInTheDocument();
});

test('useCallback and React.memo example keeps callback behavior interactive', async () => {
  const user = userEvent.setup();
  render(<CallbackMemoExample />);

  await user.click(screen.getByRole('button', { name: /memoized child action/i }));
  await user.click(screen.getByRole('button', { name: /update parent only/i }));

  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('Parent updates: 1')).toBeInTheDocument();
  expect(screen.getByText('Callback identity: unchanged')).toBeInTheDocument();
});

test('Portal example opens and closes a modal rendered outside the app root', async () => {
  const user = userEvent.setup();
  render(<PortalExample />);

  await user.click(screen.getByRole('button', { name: /open modal/i }));

  expect(screen.getByRole('dialog', { name: /portal modal/i })).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /close modal/i }));

  expect(screen.queryByRole('dialog', { name: /portal modal/i })).not.toBeInTheDocument();
});

test('Lists and keys example reorders stable keyed items', async () => {
  const user = userEvent.setup();
  render(<ListKeysExample />);

  await user.click(screen.getByRole('button', { name: /rotate/i }));

  const items = screen.getAllByRole('listitem').map((item) => item.textContent);
  expect(items).toEqual(['State', 'Tests', 'Routing']);
});

test('Data fetching example renders loading and success states', async () => {
  const user = userEvent.setup();
  render(<DataFetchingExample />);

  await user.click(screen.getByRole('button', { name: /load profile/i }));

  expect(await screen.findByText(/loaded ada lovelace/i)).toBeInTheDocument();
});

test('MSW mocks an API for fetch or axios-style clients', async () => {
  await expect(fetchUser()).resolves.toEqual({ name: 'John Doe' });
});

test('Redux store can be tested in isolation', () => {
  const testStore = configureStore({
    reducer: rootReducer
  });

  expect(testStore.getState().cart.items).toBe(1);
});
