import {colors} from '@src/theme';
import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';

export function CardItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@src/assets/arrowLeft.png')}
        style={styles.image}
      />
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{'hamas'}</Text>
        <Text style={styles.date}>{'hamas'}</Text>
        <View style={styles.tagsContainer}>
          <Tags />
          <Tags />
          <Tags />
        </View>
      </View>
      <View style={styles.percent}>
        <Text style={styles.percentTxt}>{'86 %'}</Text>
      </View>
    </View>
  );
}

function Tags() {
  return <View style={styles.tags}></View>;
}
