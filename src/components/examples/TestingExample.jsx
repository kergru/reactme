/**
 * Demonstrates the testing stack used by the project and shows the matching
 * Vitest, React Testing Library, MSW, and expect snippet.
 */
export const testingCode = `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { expect, test } from 'vitest';

test('Counter increments the value', async () => {
  render(<CounterExample />);
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByText('1')).toBeInTheDocument();
});

export const handlers = [
  http.get('/api/user', () => HttpResponse.json({ name: 'John Doe' }))
];`;

export function TestingExample() {
  return (
    <div className="test-list">
      <span>Vitest: Vite-native test runner</span>
      <span>React Testing Library: User-centered rendering</span>
      <span>MSW: API mocking for fetch or axios</span>
      <span>expect: Assertions on visible behavior</span>
    </div>
  );
}

export const testingExample = {
  title: 'Tests',
  description: 'Vitest, React Testing Library, MSW, and expect as a compact test setup.',
  code: testingCode,
  demo: <TestingExample />
};
