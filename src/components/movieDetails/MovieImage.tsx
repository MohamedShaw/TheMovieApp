import {IMAGE_URI} from '@src/api/key';
import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

interface Props {
  image?: string;
}
export function MovieImage({image}: Props) {
  return (
    <View style={styles.center}>
      <Image source={{uri: `${IMAGE_URI}${image}`}} style={styles.image} />
    </View>
  );
}
