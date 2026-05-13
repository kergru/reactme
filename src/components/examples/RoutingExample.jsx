/**
 * Demonstrates React Router links and routes inside a single-page application.
 */
import { Link } from 'react-router-dom';

export const routingCode = `import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/routing">Routing demo</Link>
      <Routes>
        <Route path="/" element={<FeatureGuide />} />
        <Route path="/routing" element={<RoutingDemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}`;

export function RoutingPreview() {
  return (
    <div className="stack">
      <p>React Router renders pages without a full reload.</p>
      <Link className="button-link" to="/routing">Open routing demo</Link>
    </div>
  );
}

export const routingExample = {
  title: 'React Routing',
  description: 'Routes switch views in the SPA without server navigation.',
  code: routingCode,
  demo: <RoutingPreview />
};
