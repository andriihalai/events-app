import {Text, View} from 'react-native';
import styles from './Post.presets';

interface PostProps {
  title: string;
  description: string;
  photo_id?: number;
}

export default function Post({title, description}: PostProps) {
  return (
    <View style={styles.postWrapper}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
