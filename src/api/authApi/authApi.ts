import {createApi} from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';

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

export const authApi = createApi({
  baseQuery,
  endpoints: builder => ({
    signup: builder.mutation<UserResponse, SignupRequest>({
      query: credentials => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {useSignupMutation, useLoginMutation} = authApi;
