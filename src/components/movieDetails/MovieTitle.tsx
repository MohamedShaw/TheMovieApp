import {IMAGE_URI} from '@src/api/key';
import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';

interface Props {
  title?: string;
  average_rate?: number;
}
export function MovieTitle({title, average_rate}: Props) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rate}>{`${average_rate} %`}</Text>
    </View>
  );
}
