import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c24ece56593157a034bad2a8fd9dc65d8751d3bd93d2de40d5d9bc047f29a7dc'
  }
});
