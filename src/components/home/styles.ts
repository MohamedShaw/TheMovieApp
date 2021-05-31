import {colors} from '@src/theme';
import {aspectRatio} from '@src/utils/responsiveDimmensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: 76,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  container: {
    height: aspectRatio * 90,
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    marginBottom: 15,
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {height: 3, width: 0},
    shadowOpacity: 0.08,
    shadowRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  button:{
    flexDirection: 'row',
    flex:1,
    alignSelf:'stretch'
  },
  image: {
    width: '30%',
    height: '100%',
    borderRadius: 15,
  },
  centerContainer: {flex: 3, alignSelf: 'stretch', marginStart: 10},
  title: {fontSize: 20, color: colors.black2, fontWeight: '800'},
  date: {fontSize: 20, color: colors.lightGrey},
  tagsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop:10,
    zIndex:1000
  },
  percent: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginEnd: 5,
  },
  percentTxt: {fontSize: 20, color: colors.green},
  tags: {
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 25,
    backgroundColor: colors.lightGrey,
    marginEnd: 5,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    paddingTop: 25,
  },
  listCompleteText: {
    color: 'red',
    height: 100,
    textAlign: 'center',
  },
});
