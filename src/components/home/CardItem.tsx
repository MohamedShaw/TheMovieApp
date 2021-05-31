import {useNavigation} from '@react-navigation/native';
import {Movies} from '@src/hooks/useMovies';
import {routeNames} from '@src/navigation/routeNames';
import React from 'react';
import {ScrollView, Image, TouchableOpacity, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from '../Text';
import {styles} from './styles';

const Generies = [
  {id: 28, name: 'Action'},
  {id: 12, name: 'Adventure'},
  {id: 16, name: 'Animation'},
  {id: 35, name: 'Comedy'},
  {id: 80, name: 'Crime'},
  {id: 99, name: 'Documentary'},
  {id: 18, name: 'Drama'},
  {id: 10751, name: 'Family'},
  {id: 14, name: 'Fantasy'},
  {id: 36, name: 'History'},
  {id: 27, name: 'Horror'},
  {id: 10402, name: 'Music'},
  {id: 9648, name: 'Mystery'},
  {id: 10749, name: 'Romance'},
  {id: 878, name: 'Science Fiction'},
  {id: 10770, name: 'TV Movie'},
  {id: 53, name: 'Thriller'},
  {id: 10752, name: 'War'},
  {id: 37, name: 'Western'},
];
export function CardItem({
  title,
  release_date,
  poster_path,
  vote_average,
  genre_ids,
}: Movies) {
  const {navigate} = useNavigation();
  let genries: {id: number; name: string}[] = [];
  if (genre_ids.length) {
    genries = Generies.filter(item => genre_ids.find(id => id === item.id));
  }

  return (
    <View style={styles.container}>
      <RectButton
        onPress={() => navigate(routeNames.movieDetails)}
        style={styles.button}>
        <Image
          source={{uri: `http://image.tmdb.org/t/p/w500/${poster_path}`}}
          style={styles.image}
        />
        <View style={styles.centerContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.date}>{release_date}</Text>
          <View style={styles.tagsContainer}>
            <ScrollView style={styles.tagsContainer} horizontal>
              {genries?.map(item => (
                <Tags {...item} />
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.percent}>
          <Text style={styles.percentTxt}>{`${vote_average} %`}</Text>
        </View>
      </RectButton>
    </View>
  );
}

type PropsTags = {
  id: number;
  name: string;
};
function Tags({id, name}: PropsTags) {
  return (
    <View style={styles.tags}>
      <Text>{name}</Text>
    </View>
  );
}
