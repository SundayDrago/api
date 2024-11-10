import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://46.101.198.244:3001/api/cyber_school',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
