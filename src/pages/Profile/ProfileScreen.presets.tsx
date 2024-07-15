import {StyleSheet, ViewStyle} from 'react-native';
import {theme} from '../../theme/theme';

const screenLayout: ViewStyle = {
  flex: 1,
  backgroundColor: theme.colors.white,
  justifyContent: 'center',
  alignItems: 'center',
};

export default StyleSheet.create({
  screenLayout,
});
