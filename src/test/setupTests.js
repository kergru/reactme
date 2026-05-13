/**
 * Configures the Vitest browser-like test environment with jest-dom matchers
 * and small Web API polyfills required by the MSW test server.
 */
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { TextDecoder, TextEncoder } from 'node:util';
import { afterEach, beforeEach } from 'vitest';

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;

beforeEach(() => {
  if (!document.getElementById('modal-root')) {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }
});

afterEach(() => {
  cleanup();
  document.getElementById('modal-root')?.remove();
});
