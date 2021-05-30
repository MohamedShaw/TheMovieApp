import {api} from '@src/api';
import {useQuery} from 'react-query';

const KEY = 'Movies';

export interface Movies {
  card_provider: 'MasterCard' | 'Visa';
  default: boolean;
  holder_name: string;
  masked_card: string;
  uuid: string;
}

async function fetchMovies(type: string) {
  return await api.get<Movies[]>('credit/list').then(res => res.data);
}

export function useMovies({type} = {type: 'upcomming'}) {
  const {data = [], ...rest} = useQuery([KEY, type], () => fetchMovies(type));

  return {movies: data, ...rest};
}
