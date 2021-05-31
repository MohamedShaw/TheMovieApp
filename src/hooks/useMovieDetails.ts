import {api} from '@src/api';
import {API_KEY} from '@src/api/key';
import {useQuery} from 'react-query';

const KEY = 'MovieDetails';

export interface Movies {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection: null;
  budget: 17000000;
  genres: [{id: number; name: string}];
  homepage: string;
  imdb_id: string;
  production_companies: [];
  production_countries: [];
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
}

async function fetchMovieDetails(id: number) {
  return await api.get(`movie/${id}?api_key=${API_KEY}`).then<Movies>(res => {
    console.log('res -->>', res);

    return res.data;
  });
}

export function useMovieDetails(id: number) {
  const {data, ...rest} = useQuery([KEY, id], () => fetchMovieDetails(id));

  return {movieDetails: data, ...rest};
}
