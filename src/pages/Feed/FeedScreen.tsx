import {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from '../screen.layout.presets';
import {useSelector} from 'react-redux';
import {fetchPosts} from '../../store/posts';
import {useAppDispatch, RootState} from '../../store/store';
import Post from '../../components/Post/Post';

export default function FeedScreen() {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.layout}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={posts}
        renderItem={({item}) => (
          <Post title={item.title} description={item.description} />
        )}
        windowSize={5} // ?
      />
    </View>
  );
}
