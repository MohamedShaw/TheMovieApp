import {IMAGE_URI} from '@src/api/key';
import {aspectRatio} from '@src/utils/responsiveDimmensions';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Genres} from '../home/CardItem';
import {Text} from '../Text';
import {styles} from './styles';

export function Credits({}: {}) {
  return (
    <View style={styles.credits}>
      <Text style={styles.creditsText}>{'Credits'}</Text>

      <View>
        <ScrollView horizontal style={{height: 100}}>
          <CreditCard />
          <CreditCard />

        </ScrollView>
      </View>
    </View>
  );
}

function CreditCard() {
  return (
    <View style={{alignItems:'center', marginEnd:15}}>
      <Image
        source={{}}
        style={{
          width: 70,
          height: 70,
          borderRadius: 70,
          backgroundColor: 'red',
        }}
      />
      <Text>"dffd'</Text>
    </View>
  );
}
