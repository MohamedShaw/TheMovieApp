import {api} from '@src/api';
import {API_KEY} from '@src/api/key';
import {useInfiniteQuery, useQuery} from 'react-query';

const KEY = 'Movies';

export interface Movies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
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
}

async function fetchMovies(page: number, type: string) {
  return await api
    .get(`movie/${type}?api_key=${API_KEY}&page=${page}`)
    .then<{results: Movies[]; page: number; total_pages: number}>(res => {
      console.log('res -->>', res);

      return res.data;
    });
}

export function useMovies(type: string) {
  const {data, ...rest} = useInfiniteQuery(
    [KEY, type],
    ({pageParam = 1}) => fetchMovies(pageParam, type),
    {
      getNextPageParam: pageData => {
        if (pageData.page >= pageData.total_pages) return undefined;
        return pageData.page + 1;
      },
      keepPreviousData: true,
    },
  );

  const results = data?.pages.flat().map(item => item.results);

  return {movies: results?.flat() || [], ...rest};
}
