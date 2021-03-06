import {NavigationProp} from '@react-navigation/native';
import {MovieDetails} from '@src/screens';
import {routeNames} from './routeNames';

export type NavigationT = NavigationProp<any>;

export interface Screen {
  name: string;
  component: React.FunctionComponent<any>;
}
export const screens: Screen[] = [
  {name: routeNames.movieDetails, component: MovieDetails},
];
