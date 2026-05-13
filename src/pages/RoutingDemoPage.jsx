/**
 * Demonstrates a dedicated React Router page rendered without a full browser
 * document reload.
 */
import { Link } from 'react-router-dom';

export function RoutingDemoPage() {
  return (
    <div className="route-page">
      <p className="eyebrow">Route: /routing</p>
      <h2>Dedicated view, same React process</h2>
      <p>
        This page is rendered by React Router. The browser does not load a new HTML document;
        React swaps the matching component in the Routes tree instead.
      </p>
      <Link className="button-link" to="/">Back to features</Link>
    </div>
  );
}
