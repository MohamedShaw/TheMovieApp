import {IMAGE_URI} from '@src/api/key';
import {
  Credits,
  Details,
  Header,
  MovieImage,
  MovieTitle,
} from '@src/components';

import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {styles} from './styles';

export function MovieDetails() {
  
  return (
    <View style={styles.container}>
      <Header />
      <MovieImage image="d" />
      <MovieTitle title="s" average_rate="dd" />
      <Details overView="dsfsdfsdfds" genres={['1', '4']} />
      <Credits />
      <SafeAreaView />
    </View>
  );
}
