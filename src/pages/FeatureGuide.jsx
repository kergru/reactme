/**
 * Assembles all React feature examples into the main guide page rendered at the
 * root route.
 */
import { CodeExample } from '../components/CodeExample.jsx';
import { examples } from '../components/examples/index.jsx';

export function FeatureGuide() {
  return (
    <div className="page">
      {examples.map((example) => (
        <CodeExample
          key={example.title}
          title={example.title}
          description={example.description}
          code={example.code}
        >
          {example.demo}
        </CodeExample>
      ))}
    </div>
  );
}
