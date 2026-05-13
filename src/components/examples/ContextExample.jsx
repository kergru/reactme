/**
 * Demonstrates Context API state sharing without prop drilling.
 */
import { useMemo } from 'react';
import { ThemeProvider, useTheme } from '../../context/ThemeContext.jsx';

export const contextCode = `const ThemeContext = createContext(null);

function Toolbar() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}

<ThemeProvider>
  <Toolbar />
</ThemeProvider>`;

function ThemeToolbar() {
  const { theme, toggleTheme } = useTheme();
  const label = useMemo(() => (theme === 'light' ? 'Light' : 'Dark'), [theme]);

  return (
    <div className={`theme-preview ${theme}`}>
      <p>Current theme: {label}</p>
      <button type="button" onClick={toggleTheme}>Switch theme</button>
    </div>
  );
}

export function ContextExample() {
  return (
    <ThemeProvider>
      <ThemeToolbar />
    </ThemeProvider>
  );
}

export const contextExample = {
  title: 'Context API',
  description: 'Context shares state with deep components without prop drilling.',
  code: contextCode,
  demo: <ContextExample />
};
