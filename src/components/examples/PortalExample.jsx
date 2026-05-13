/**
 * Demonstrates rendering a modal through a React portal outside the main app root.
 */
import { useState } from 'react';
import { createPortal } from 'react-dom';

export const portalCode = `function Modal({ onClose }) {
  return createPortal(
    <div role="dialog">
      <p>Rendered in #modal-root</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('modal-root')
  );
}`;

function Modal({ onClose }) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div className="modal-backdrop">
      <div className="modal-panel" role="dialog" aria-modal="true" aria-label="Portal modal">
        <h3>Portal modal</h3>
        <p>This panel is rendered into #modal-root, outside the main React tree.</p>
        <button type="button" onClick={onClose}>Close modal</button>
      </div>
    </div>,
    modalRoot
  );
}

export function PortalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="stack">
      <button type="button" onClick={() => setOpen(true)}>Open modal</button>
      <p className="hint">The modal is mounted outside the normal component DOM hierarchy.</p>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}

export const portalExample = {
  title: 'Portals',
  description: 'Portals render UI into a different DOM node while keeping React event behavior.',
  code: portalCode,
  demo: <PortalExample />
};
