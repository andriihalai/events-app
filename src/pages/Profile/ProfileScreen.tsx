import {View} from 'react-native';
import FadingSquare from './components/FadingSquare/FadingSquare';
import FadingSquareReanimated from './components/FadingSquareReanimated/FadingSquareReanimated';
import styles from './ProfileScreen.presets';
import FadingSquareMoti from './components/PulsingCircleMoti/FadingSquareMoti';

export default function ProfileScreen() {
  return (
    <View style={styles.screenLayout}>
      <FadingSquare sideLength={100} />
      <FadingSquareReanimated sideLength={100} />
      <FadingSquareMoti width={200} maxWidth={300} />
    </View>
  );
}
