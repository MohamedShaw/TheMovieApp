import React from 'react';
import {View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';
export function HomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Movies</Text>
    </View>
  );
}
