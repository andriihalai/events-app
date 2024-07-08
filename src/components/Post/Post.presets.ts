import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

const postWrapper: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: 'black',
  marginBottom: 10,
};

const postTitle: TextStyle = {
  fontWeight: 'bold',
};

export default StyleSheet.create({
  postWrapper,
  postTitle,
});
