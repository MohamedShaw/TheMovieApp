import defaultAxios from 'axios';

const baseURL = 'https://holy-reserve-vzu1f10bvyfd.vapor-farm-a1.com/api/v2';

export const api = defaultAxios.create({baseURL});
