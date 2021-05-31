import {Movies} from '@src/hooks/useMovies';
import {colors} from '@src/theme';
import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';

export function CardItem({
  title,
  release_date,
  poster_path,
  vote_average,
}: Movies) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `http://image.tmdb.org/t/p/w500/${poster_path}`}}
        style={styles.image}
      />
      <View style={styles.centerContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.date}>{release_date}</Text>
        <View style={styles.tagsContainer}>
          <Tags />
        </View>
      </View>
      <View style={styles.percent}>
        <Text style={styles.percentTxt}>{`${vote_average} %`}</Text>
      </View>
    </View>
  );
}

function Tags() {
  return (
    <View style={styles.tags}>
      <Text>Action</Text>
    </View>
  );
}
