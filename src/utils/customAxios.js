import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://stationery-online-shop-server.herokuapp.com/'
      : 'http://localhost:5000',
});
