import {colors} from '@src/theme';
import {aspectRatio} from '@src/utils/responsiveDimmensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignSelf: 'stretch',
  },
  image: {
    width: 80 * aspectRatio,
    height: 120 * aspectRatio,
  },
});
