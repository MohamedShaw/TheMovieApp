import {useNavigation} from '@react-navigation/native';
import {IMAGE_URI} from '@src/api/key';
import {Movies} from '@src/hooks/useMovies';
import {routeNames} from '@src/navigation/routeNames';
import {onSetImage} from '@src/slices';
import React from 'react';
import {ScrollView, Image, TouchableOpacity, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
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
export type GenresItem = {
  id: number;
  name: string;
};
export function CardItem({
  title,
  release_date,
  poster_path,
  vote_average,
  genre_ids,
  id,
}: Movies) {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  let genries: GenresItem[] = getGendres(genre_ids);

  function onNavigateToDetails() {
    navigate(routeNames.movieDetails, {movieId: id});
    dispatch(onSetImage(poster_path));
  }
  return (
    <View style={styles.container}>
      <RectButton onPress={onNavigateToDetails} style={styles.button}>
        <Image
          source={{uri: `${IMAGE_URI}${poster_path}`}}
          style={styles.image}
        />
        <View style={styles.centerContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.date}>{release_date}</Text>
          <Genres genres={genries} />
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

interface GenresProps {
  genres: GenresItem[];
}
export function Genres({genres}: GenresProps) {
  return (
    <View style={styles.tagsContainer}>
      <ScrollView style={styles.tagsContainer} horizontal>
        {genres?.map(item => (
          <Tags {...item} key={item.id}/>
        ))}
      </ScrollView>
    </View>
  );
}

export function getGendres(genre_ids: []) {
  if (genre_ids.length) {
    return Generies.filter(item => genre_ids.find(id => id === item.id));
  }
  return [];
}
