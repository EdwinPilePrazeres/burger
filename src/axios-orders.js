import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-9575f.firebaseio.com/'
});

export default instance;