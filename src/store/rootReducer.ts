import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {profileImageReducer, themeReducer} from '@src/slices';
import {PersistConfig, persistReducer} from 'redux-persist';

const reducers = combineReducers({
  theme: themeReducer,
  profile_path: profileImageReducer,
});

export type RootState = ReturnType<typeof reducers>;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;
