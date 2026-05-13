/**
 * Application entry point that mounts the React SPA, wires global Redux state,
 * and declares the top-level browser routes.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { store } from './store.js';
import { FeatureGuide } from './pages/FeatureGuide.jsx';
import { RoutingDemoPage } from './pages/RoutingDemoPage.jsx';
import { UserRoutePage } from './pages/UserRoutePage.jsx';
import './styles.css';

function AppShell() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <div>
          <p className="eyebrow">React only SPA</p>
          <h1>React Features Visualized</h1>
        </div>
        <nav className="top-nav" aria-label="Main navigation">
          <NavLink to="/">Features</NavLink>
          <NavLink to="/routing">Routing Demo</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<FeatureGuide />} />
          <Route path="/routing" element={<RoutingDemoPage />} />
          <Route path="/users/:userId" element={<UserRoutePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppShell />
    </Provider>
  </React.StrictMode>
);
