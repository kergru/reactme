/**
 * Provides a tiny API client used by the MSW test example to demonstrate mocked
 * network requests.
 */
export async function fetchUser() {
  const response = await fetch(new URL('/api/user', window.location.origin));
  if (!response.ok) {
    throw new Error('User request failed');
  }
  return response.json();
}

export async function fetchProfile() {
  const response = await fetch(new URL('/api/profile', window.location.origin));
  if (!response.ok) {
    throw new Error('Profile request failed');
  }
  return response.json();
}
