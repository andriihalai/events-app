import {RootState} from '../../store/store';
import {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchPosts} from '../../store/posts';
import {useAppDispatch} from '../../store/store';
import Post from '../Event/Event';

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
        <Post
          title={item.title}
          // TODO: Take the data below from db
          photoUrl="https://theperfectevent.com/wp-content/uploads/2020/01/Main-Scroll-2.jpg"
          location="Kyiv"
          date={new Date()}
        />
      )}
      windowSize={5}
    />
  );
}
