import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data.token;
}

export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export const getIncidences = async (params) => {
  const response = await api.get('/incidences', { params });
  return response.data;
};

export const createIncidence = async (formData) => {
  const response = await api.post('/incidences', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getIncidenceDetails = async (id) => {
  const response = await api.get(`/incidences/${id}`);
  return response.data;
};

export const addComment = async () => {
  const response = await api.post(`/incidences`);
  return response.data;
};

export const getComments = async (id) => {
  const response = await api.get(`/incidences/${id}`);
  return response.data;
};