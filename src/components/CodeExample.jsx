/**
 * Reusable two-column layout that pairs a source-code snippet with its live
 * rendered React example.
 */
export function CodeExample({ title, description, code, children }) {
  return (
    <section className="example-section" aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}>
      <div className="section-heading">
        <h2 id={title.replace(/\s+/g, '-').toLowerCase()}>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="example-grid">
        <div className="code-panel">
          <div className="panel-label">Plain JSX</div>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
        <div className="render-panel">
          <div className="panel-label">Rendered</div>
          <div className="render-surface">{children}</div>
        </div>
      </div>
    </section>
  );
}
