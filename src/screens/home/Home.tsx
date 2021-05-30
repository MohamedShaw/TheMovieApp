import {CardItem, Text} from '@src/components';
import {AppList} from '@src/components/List';
import {colors} from '@src/theme';
import {aspectRatio} from '@src/utils/responsiveDimmensions';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

interface Props {}
export function Home({}: Props) {
  return (
    <View style={styles.container}>
      <AppList
        data={[1, 2, 3, 4]}
        renderItem={() => <CardItem />}
        style={{flex: 1, paddingHorizontal: 20}}
      />
    </View>
  );
}
