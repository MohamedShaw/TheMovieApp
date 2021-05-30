import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {colors} from '@src/theme';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface ThemeState {
  colors: typeof colors;
}

const initialState: ThemeState = {
  colors: colors,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onModeChange(state, isDarkMode: PayloadAction<boolean>) {
      if (isDarkMode) {
      } else {
        state.colors = colors;
      }
    },
  },
});

export const {onModeChange} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const useTheme = () => {
  const theme = useSelector((state: RootStore) => state.theme);

  return theme;
};
