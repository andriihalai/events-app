import {useState} from 'react';
import {Pressable} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import styles from './FadingSquareReanimated.presets';

export default function FadingSquareReanimated({
  sideLength,
}: {
  sideLength: number;
}) {
  const opacity = useSharedValue<number>(1);
  const squareSideLength = useSharedValue<number>(sideLength);
  const [isShown, setIsShown] = useState(true);

  const handlePress = () => {
    if (isShown) {
      opacity.value = withTiming(0, {duration: 1500});
      squareSideLength.value = withTiming(sideLength - 50, {duration: 1500});
    } else {
      opacity.value = withTiming(1, {duration: 500});
      squareSideLength.value = withTiming(sideLength, {duration: 500});
    }
    setIsShown(!isShown);
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={{
          ...styles.square,
          opacity,
          width: squareSideLength,
          height: squareSideLength,
        }}
      />
    </Pressable>
  );
}
