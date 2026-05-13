/**
 * Provides a tiny API client used by the MSW test example to demonstrate mocked
 * network requests.
 */
export async function fetchUser() {
  const response = await fetch(new URL('/api/user', window.location.origin));
  if (!response.ok) {
    throw new Error('User request failed');
  }
  return parseJsonResponse(response);
}

export async function fetchProfile() {
  const response = await fetch(new URL('/api/profile', window.location.origin));
  if (!response.ok) {
    throw new Error('Profile request failed');
  }
  return parseJsonResponse(response);
}

async function parseJsonResponse(response) {
  const contentType = response.headers.get('content-type') ?? '';

  if (contentType.includes('text/html')) {
    throw new Error('Expected JSON response');
  }

  return response.json();
}
