import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const ApiDesc = axios.create({
  baseURL: 'https://pokeapi.glitch.me/v1/pokemon/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'User-Agent': '*'
  },
  withCredentials: true,
});

export default Api;
