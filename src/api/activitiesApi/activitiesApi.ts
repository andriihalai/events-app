import {createApi} from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';

interface Activity {
  id: number;
  title: string;
  description: string;
  location: string;
  photoUrl: string;
  date: Date | string;
}
type ActivitiesResponse = Activity[];

export const activitiesApi = createApi({
  reducerPath: 'activitiesApi',
  tagTypes: ['Activities'],
  baseQuery,
  endpoints: build => ({
    getActivities: build.query<ActivitiesResponse, void>({
      query: () => 'activities',
      providesTags: result =>
        result
          ? [
              ...result.map(({id}) => ({type: 'Activities' as const, id})),
              {type: 'Activities', id: 'LIST'},
            ]
          : [{type: 'Activities', id: 'LIST'}],
    }),
    addActivity: build.mutation<Activity, Partial<Activity>>({
      query: body => ({
        url: 'activities',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Activities', id: 'LIST'}],
    }),
    deleteActivity: build.mutation<Activity, number>({
      query: id => ({
        url: `activities/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Activities', id: 'LIST'}],
    }),
  }),
});

export const {
  useGetActivitiesQuery,
  useAddActivityMutation,
  useDeleteActivityMutation,
} = activitiesApi;
