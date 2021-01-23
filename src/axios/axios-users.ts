import axios from 'axios';

const instance = axios.create({
  baseURL: '<FIREBASE_URL>/users',
});

export default instance;
