const USER_SERVICE_BASE_URL = 'http://localhost:3001';
const PRODUCT_SERVICE_BASE_URL = 'http://localhost:3002';

export const API_ROUTES = {
  USER: {
    LOGIN: `${USER_SERVICE_BASE_URL}/auth/login`,
    SIGNUP: `${USER_SERVICE_BASE_URL}/auth/register`,
    CURRENT_USER: `${USER_SERVICE_BASE_URL}/auth/me`, // optional for token check
  },
  PRODUCT: {
    LIST: `${PRODUCT_SERVICE_BASE_URL}/products`, // placeholder
  },
};
