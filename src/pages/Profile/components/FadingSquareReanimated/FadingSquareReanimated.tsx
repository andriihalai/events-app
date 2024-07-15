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
    const animDuration = isShown ? 1500 : 500;
    const opacityValue = isShown ? 0 : 1;
    const newSideLength = isShown ? sideLength - 50 : sideLength;

    opacity.value = withTiming(opacityValue, {duration: animDuration});
    squareSideLength.value = withTiming(newSideLength, {
      duration: animDuration,
    });
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
