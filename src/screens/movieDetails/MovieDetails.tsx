import {IMAGE_URI} from '@src/api/key';
import {
  AppSpinner,
  Credits,
  Details,
  Header,
  MovieImage,
  MovieTitle,
} from '@src/components';
import {useMovieCredits, useMovieDetails} from '@src/hooks';

import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';

interface Props {
  route: {
    params: {movieId: number};
  };
}
export function MovieDetails({route: {params}}: Props) {
  const {movieDetails, isLoading} = useMovieDetails(params.movieId);
  const {moviCredits, isLoading: isCreditLoading} = useMovieCredits(
    params.movieId,
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      {isLoading ? (
        <AppSpinner />
      ) : (
        <>
          <MovieImage image={movieDetails?.poster_path} />
          <MovieTitle
            title={movieDetails?.title}
            average_rate={movieDetails?.vote_average}
          />
          <Details
            overView={movieDetails?.overview}
            genres={movieDetails?.genres}
          />
          {isCreditLoading ? (
            <AppSpinner active={isCreditLoading} />
          ) : (
            <Credits credits={moviCredits} />
          )}
        </>
      )}

      <SafeAreaView />
    </ScrollView>
  );
}
