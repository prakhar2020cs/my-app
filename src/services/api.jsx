 
export const fetchAvailability = async () => {
  const response = await fetch('/api/availability');
  if (!response.ok) {
    throw new Error('Failed to fetch availability');
  }
  return response.json();
};

/**
 * Login a user with provided credentials.
 * @param {Object} user - User credentials {email, password}.
 * @returns {Promise} Promise object represents the login response.
 */
export const loginUser = async (user) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};

/**
 * Fetch sessions from the server.
 * @returns {Promise} Promise object represents the sessions data.
 */
export const fetchSessions = async () => {
  const response = await fetch('/api/sessions');
  if (!response.ok) {
    throw new Error('Failed to fetch sessions');
  }
  return response.json();
};

/**
 * Create a new session.
 * @param {Object} session - Session details.
 * @returns {Promise} Promise object represents the creation response.
 */
export const createSession = async (session) => {
  const response = await fetch('/api/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(session),
  });
  if (!response.ok) {
    throw new Error('Failed to create session');
  }
  return response.json();
};