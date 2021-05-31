import {useNavigation} from '@react-navigation/native';
import {colors} from '@src/theme';
import {APPBAR_HEIGHT} from '@src/utils/responsiveDimmensions';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

export function Header() {
  const {goBack} = useNavigation();
  const onPressBack = () => {
    goBack();
  };
  return (
    <>
      <SafeAreaView style={styles.safeArea} />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={onPressBack}
          style={styles.back}
          accessibilityRole="button">
          <Image source={require('@src/assets/arrowLeft.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.white},
  header: {
    height: APPBAR_HEIGHT,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  back: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
