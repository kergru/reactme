/**
 * Demonstrates controlled form inputs and conditional rendering from form state.
 */
import { useState } from 'react';

export const formCode = `function ProfileForm() {
  const [email, setEmail] = useState('');
  const isValid = email.includes('@');

  return (
    <form>
      <input value={email} onChange={(event) => {
        setEmail(event.target.value);
      }} />
      {isValid ? <p>Valid email</p> : <p>Please check</p>}
    </form>
  );
}`;

export function ProfileFormExample() {
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const isValid = email.includes('@') && email.includes('.');

  return (
    <form className="form-demo">
      <label>
        Email
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@example.com"
        />
      </label>
      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(event) => setNewsletter(event.target.checked)}
        />
        Newsletter
      </label>
      <p className={isValid ? 'success' : 'warning'}>
        {isValid ? 'Valid input' : 'Conditional rendering: email is missing or incomplete'}
      </p>
      {newsletter && <p className="hint">Newsletter option is active.</p>}
    </form>
  );
}

export const controlledFormExample = {
  title: 'Controlled Components',
  description: 'Form values live in React state; output is rendered conditionally.',
  code: formCode,
  demo: <ProfileFormExample />
};
