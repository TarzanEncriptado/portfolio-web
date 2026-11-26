const config = {
  API: {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    ENDPOINTS: {
      AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        SEND_TOKEN: '/auth/send-token',
        VERIFY_TOKEN: '/auth/verify-token',
      },
      USER: {
        PROFILE: '/user/profile',
        UPDATE: '/user/update',
      },
      PROJECTS: {
        LIST: '/projects',
        CREATE: '/projects',
        UPDATE: '/projects/:id',
        DELETE: '/projects/:id',
      },
      CONTACT: {
        SEND: '/contact/send',
      },
    },
    HEADERS: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
  AUTH: {
    TOKEN_KEY: 'portfolio_token',
    TOKEN_PREFIX: 'Bearer',
  },
};

export default config;
