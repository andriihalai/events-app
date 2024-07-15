import {ViewStyle, StyleSheet} from 'react-native';
import {theme} from '../../../../theme/theme';

const square: ViewStyle = {
  backgroundColor: theme.colors.lightBlue,
  borderRadius: 10,
  width: 200,
  height: 200,
};

const styles = StyleSheet.create({
  square,
});

export default styles;
