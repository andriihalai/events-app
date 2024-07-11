import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../../store/store';
import {API_BASE} from '@env';

export interface User {
  username: string;
  email: string;
}

export interface UserResponse {
  user: User;
  accessToken: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  accessToken: string;
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    prepareHeaders: (headers, {getState}) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    signup: builder.mutation<UserResponse, SignupRequest>({
      query: credentials => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {useSignupMutation, useLoginMutation} = authApi;
