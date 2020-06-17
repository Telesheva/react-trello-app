import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-trello-app.firebaseio.com/'
});