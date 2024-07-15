import {ViewStyle, StyleSheet} from 'react-native';
import {theme} from '../../../../theme/theme';

const pulsingCircle: ViewStyle = {
  backgroundColor: theme.colors.crimsonBlaze,
  borderRadius: 300,
  width: 200,
  height: 200,
  position: 'absolute',
};

const pulsingCircleContainer: ViewStyle = {
  backgroundColor: theme.colors.crimsonBlaze,
  borderRadius: 300,
  width: 200,
  height: 200,
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  pulsingCircle,
  pulsingCircleContainer,
});

export default styles;
