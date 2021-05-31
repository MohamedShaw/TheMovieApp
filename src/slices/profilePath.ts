import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {colors} from '@src/theme';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

const initialState = {
  profile_path: '',
};

const profileImageSlice = createSlice({
  name: 'profile_path',
  initialState,
  reducers: {
    onSetImage(state, action: PayloadAction<any>) {
      state.profile_path = action.payload;
    },
  },
});

export const {onSetImage} = profileImageSlice.actions;

export const profileImageReducer = profileImageSlice.reducer;

export const useProfile = () => {
  const profile_path = useSelector((state: RootStore) => state.profile_path);

  return profile_path;
};
