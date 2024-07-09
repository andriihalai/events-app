import {RootState} from '../../store/store';
import {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchPosts} from '../../store/event';
import {useAppDispatch} from '../../store/store';
import Event from '../Event/Event';

export default function ListOfEvents() {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={posts}
      renderItem={({item}) => (
        <Event
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
