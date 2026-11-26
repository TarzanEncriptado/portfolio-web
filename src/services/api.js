import config from '../config/api.config';

class ApiService {
  constructor() {
    this.baseURL = config.API.BASE_URL;
    this.headers = config.API.HEADERS;
  }

  getAuthToken() {
    return localStorage.getItem(config.AUTH.TOKEN_KEY);
  }

  getHeaders() {
    const headers = { ...this.headers };
    const token = this.getAuthToken();
    
    if (token) {
      headers.Authorization = `${config.AUTH.TOKEN_PREFIX} ${token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const headers = this.getHeaders();
      
      const response = await fetch(url, {
        ...options,
        headers: {
          ...headers,
          ...options.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async sendToken(email) {
    return this.request('/api/send-token', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async verifyToken(data) {
    return this.request('/api/verify-code', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Contact endpoints
  async sendContact(contactData) {
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // Projects endpoints
  async getProjects() {
    return this.request('/api/projects');
  }

  async createProject(projectData) {
    return this.request('/api/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }
}

export const api = new ApiService();
