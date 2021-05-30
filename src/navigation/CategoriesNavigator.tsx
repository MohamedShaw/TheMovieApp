import * as React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {HomeHeader, ListMovies, TopBar} from '@src/components';

const Tab = createMaterialTopTabNavigator();

export function CategoryNavigator({
  route,
}: {
  route: any;
  navigation: NavigationProp<any>;
}) {
  const categories = [
    {
      type: 'upcoming',
      name: 'Upcomming',
    },
    {
      type: 'popular',
      name: 'Popular',
    },
    {
      type: 'top_rated',
      name: 'Top Rated',
    },
  ];

  return (
    <>
      <HomeHeader />
      <Tab.Navigator
        tabBar={(props: any) => <TopBar {...props} />}
        initialRouteName={'Upcomming'}>
        {categories.map(category => {
          return (
            <Tab.Screen
              name={category.name}
              component={ListMovies}
              key={category.type.toString()}
              initialParams={category}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
}
