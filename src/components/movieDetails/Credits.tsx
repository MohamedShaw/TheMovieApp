import {IMAGE_URI} from '@src/api/key';
import {CastCrewData, CreditsData} from '@src/hooks/useMovieCredits';
import {useProfile} from '@src/slices';
import {aspectRatio} from '@src/utils/responsiveDimmensions';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Text} from '../Text';
import {styles} from './styles';

interface Props {
  credits?: CreditsData;
}
export function Credits({credits}: Props) {
  return (
    <View style={styles.credits}>
      <Text style={styles.creditsText}>{'Credits'}</Text>

      <View>
        <ScrollView horizontal style={{height: 100}}>
          {credits?.crew?.map(item => (
            <CreditCard key={item.cast_id} {...item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

function CreditCard({profile_path, name}: CastCrewData) {
  let image = profile_path;

  const {profile_path: imageOfMovie} = useProfile();
  console.log("imageOfMovie",imageOfMovie);
  

  if (image === null) {
    image = imageOfMovie;
  }
  console.log('profile', image);

  return (
    <View style={{alignItems: 'center', marginEnd: 15}}>
      <Image
        source={{
          uri: `${IMAGE_URI}${image}`,
        }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 70,
        }}
      />
      <Text>{name}</Text>
    </View>
  );
}
