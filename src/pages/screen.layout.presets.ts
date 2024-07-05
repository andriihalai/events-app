import {ViewStyle, StyleSheet} from 'react-native';

interface Styles {
  container: ViewStyle;
}

const view = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default view;
