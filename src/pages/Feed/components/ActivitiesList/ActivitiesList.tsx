import {RootState} from '../../../../store/store';
import {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchPosts} from '../../../../store/event';
import {useAppDispatch} from '../../../../store/store';
import Activity from '../Activity/Activity';
import {MOCKDATA} from './mock';

export default function ListOfEvents() {
  let posts = useSelector((state: RootState) => state.posts.posts);
  posts = MOCKDATA;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={posts}
      renderItem={({item}) => (
        <Activity
          title={item.title}
          photoUrl={item.photoUrl}
          location={item.location}
          date={item.date}
        />
      )}
      windowSize={5}
    />
  );
}
