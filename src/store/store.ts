import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import activitiesReducer from './activitySlice';
import {activitiesApi} from '../api/activitiesApi/activitiesApi';
import {authApi} from '../api/authApi/authApi';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  [activitiesApi.reducerPath]: activitiesApi.reducer,
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(activitiesApi.middleware, authApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
