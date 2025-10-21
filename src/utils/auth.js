export const TOKEN_KEY = 'token';

export function isLoggedIn() {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function login(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem('user');
  localStorage.removeItem('expires_at');
}
