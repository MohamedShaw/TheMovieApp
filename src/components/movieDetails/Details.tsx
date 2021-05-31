import {IMAGE_URI} from '@src/api/key';
import React from 'react';
import {Image, View} from 'react-native';
import {Genres, GenresItem} from '../home/CardItem';
import {Text} from '../Text';
import {styles} from './styles';

interface Props {
  overView?: string;
  genres?: GenresItem[];
}
export function Details({overView, genres}: Props) {
  return (
    <View style={styles.details}>
      <Text style={styles.overView} >{overView}</Text>

      <Text style={styles.genres}>{'Genres'}</Text>

      <Genres genres={genres || []} />
    </View>
  );
}
