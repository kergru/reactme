/**
 * Demonstrates plain React components receiving props and rendering JSX.
 */
export const componentPropsCode = `function GreetingCard({ name, role }) {
  return (
    <article>
      <h3>Hello {name}</h3>
      <p>{role}</p>
    </article>
  );
}

<GreetingCard name="John Doe" role="Frontend Engineer" />`;

export function GreetingCard({ name, role }) {
  return (
    <article className="demo-card">
      <h3>Hello {name}</h3>
      <p>{role}</p>
    </article>
  );
}

export const componentPropsExample = {
  title: 'Components and Props',
  description: 'A function receives properties and returns JSX.',
  code: componentPropsCode,
  demo: <GreetingCard name="John Doe" role="Frontend Engineer" />
};
