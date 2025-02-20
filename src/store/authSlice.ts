import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {User} from '../api/authApi/authApi';
import type {RootState} from './store';

type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null} as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: {user, accessToken},
      }: PayloadAction<{user: User; accessToken: string}>,
    ) => {
      state.user = user;
      state.token = accessToken;
    },
  },
});

export const {setCredentials} = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
