import axios from 'axios';

const instance = axios.create({
  baseURL: '<FIREBASE_URL>/distilleries',
});

export default instance;
