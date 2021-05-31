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
    width: 65 * aspectRatio,
    height: 105 * aspectRatio,
    borderRadius: 10,
  },
  center: {alignItems: 'center', alignSelf: 'stretch', paddingHorizontal: 20},
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rate: {
    color: colors.green,
    fontSize: 20,
  },
  details: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  overView: {
    fontSize: 12,
  },
  genres: {
    fontSize: 20,
  },
  credits: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    // marginBottom: 10,
  },
  creditsText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
