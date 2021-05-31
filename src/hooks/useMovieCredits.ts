import {api} from '@src/api';
import {API_KEY} from '@src/api/key';
import {useQuery} from 'react-query';

const KEY = 'MovieCredits';

export type CastCrewData = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export interface CreditsData {
  cast: CastCrewData[];
  crew: CastCrewData[];
  id: number;
}

async function fetchMovieCredits(id: number) {
  return await api
    .get(`movie/${id}/credits?api_key=${API_KEY}`)
    .then<CreditsData>(res => res.data);
}

export function useMovieCredits(id: number) {
  const {data, ...rest} = useQuery([KEY, id], () => fetchMovieCredits(id));

  return {moviCredits: data, ...rest};
}
