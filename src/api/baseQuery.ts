import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE} from '@env';
import {RootState} from '../store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,
  prepareHeaders: (headers, {getState}) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export default baseQuery;
