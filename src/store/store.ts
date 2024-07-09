import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import postsReducer from './event';

const store = configureStore({
  reducer: {posts: postsReducer},
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
