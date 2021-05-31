import {IMAGE_URI} from '@src/api/key';
import React from 'react';
import {Image, View} from 'react-native';
import {Genres} from '../home/CardItem';
import {Text} from '../Text';
import {styles} from './styles';

interface Props {
  overView: string;
  genres: [];
}
export function Details({overView, genres}: Props) {
  return (
    <View style={styles.details}>
      <Text style={styles.overView}>{overView}</Text>

      <Text style={styles.genres}>{'Genres'}</Text>

      <Genres
        genres={[
          {id: 28, name: 'Action'},
          {id: 12, name: 'Adventure'},
          {id: 16, name: 'Animation'},
        ]}
      />
    </View>
  );
}
