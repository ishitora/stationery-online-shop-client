import axios from 'axios';
import store from '../store';

const fetchData = () => {
  const token = store.getState().token;

  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default fetchData;
