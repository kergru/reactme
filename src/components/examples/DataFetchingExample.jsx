/**
 * Demonstrates loading, success, error, and retry states for async data fetching.
 */
import { useState } from 'react';
import { fetchProfile } from '../../api/user.js';

export const dataFetchingCode = `function ProfileLoader() {
  const [status, setStatus] = useState('idle');

  async function loadProfile() {
    setStatus('loading');
    try {
      const profile = await fetchProfile();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }
}`;

export function DataFetchingExample() {
  const [status, setStatus] = useState('idle');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  const loadProfile = async () => {
    setStatus('loading');
    setError('');

    try {
      const nextProfile = await fetchProfile();
      setProfile(nextProfile);
      setStatus('success');
    } catch (requestError) {
      setProfile(null);
      setError(requestError.message);
      setStatus('error');
    }
  };

  return (
    <div className="stack">
      <button type="button" onClick={loadProfile}>
        {status === 'error' ? 'Retry profile' : 'Load profile'}
      </button>
      {status === 'idle' && <p className="hint">No request has been sent yet.</p>}
      {status === 'loading' && <p className="hint">Loading profile...</p>}
      {status === 'success' && <p className="success">Loaded {profile.name}</p>}
      {status === 'error' && <p className="warning">Request failed: {error}</p>}
    </div>
  );
}

export const dataFetchingExample = {
  title: 'Data Fetching States',
  description: 'Async UI should represent idle, loading, success, error, and retry states.',
  code: dataFetchingCode,
  demo: <DataFetchingExample />
};
