import defaultAxios from 'axios';

const baseURL = 'https://api.themoviedb.org/';

export const api = defaultAxios.create({baseURL});
