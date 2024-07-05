import {StyleSheet, View, Text} from 'react-native';

export default function FeedScreen() {
  return (
    <View style={styles.view}>
      <Text>Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
