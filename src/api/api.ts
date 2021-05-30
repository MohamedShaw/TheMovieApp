import defaultAxios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';

export const api = defaultAxios.create({baseURL});
