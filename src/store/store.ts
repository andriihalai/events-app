import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import activitiesReducer from './activitySlice';
import {activitiesApi} from '../api/activitiesApi/activitiesApi';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  [activitiesApi.reducerPath]: activitiesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(activitiesApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
