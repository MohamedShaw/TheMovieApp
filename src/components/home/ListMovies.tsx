import {AppSpinner, CardItem, Text} from '@src/components';
import {AppList} from '@src/components/List';
import {useMovies} from '@src/hooks';
import {Movies} from '@src/hooks/useMovies';

import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
type MovieItem = {
  name: string;
  type: string;
};

interface Props {
  route: {
    params: MovieItem;
  };
}
export function ListMovies({route}: Props) {
  const {
    movies,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetchingNextPage,

    isFetched,
    isLoading,
  } = useMovies(route?.params.type);

  if (isLoading) {
    return <AppSpinner active={isLoading} />;
  }
  return (
    <View style={styles.listContainer}>
      <AppList
        data={movies}
        renderItem={({item}) => <CardItem {...(item as Movies)} />}
        style={{flex: 1, paddingHorizontal: 20}}
        ListFooterComponent={
          hasNextPage || isLoading ? (
            <AppSpinner active={isLoading} />
          ) : (
            <Text style={styles.listCompleteText}>No more items to fetch</Text>
          )
        }
        onEndReached={() => fetchNextPage()}
        ListFooterComponentStyle={{
          height: 50,
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </View>
  );
}
