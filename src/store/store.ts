import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import postsReducer from './event';

const rootReducer = combineReducers({posts: postsReducer});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
