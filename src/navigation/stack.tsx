import * as React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {routeNames} from './routeNames';
import {Screen, screens} from './types';
import {CategoryNavigator} from './CategoriesNavigator';

const appStack = createNativeStackNavigator();

export function Stack() {
  return (
    <NavigationContainer>
      <appStack.Navigator
        screenOptions={{
          direction: 'ltr',
          headerShown: false,
          statusBarStyle: 'light',
        }}
        initialRouteName={routeNames.home}>
        <appStack.Screen name={routeNames.home} component={CategoryNavigator} />

        {screens.map((screen: Screen) => (
          <appStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </appStack.Navigator>
    </NavigationContainer>
  );
}
