import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Pressable} from 'react-native';

export default function FadingSquare({sideLength}: {sideLength: number}) {
  const opacity = useRef(new Animated.Value(1)).current;
  const squareSideLength = useRef(new Animated.Value(sideLength)).current;
  const [isShown, setIsShown] = useState(true);

  const animate = (
    toValueOpacity: number,
    toValueSize: number,
    duration: number,
  ) => {
    const animations = [
      Animated.timing(opacity, {
        toValue: toValueOpacity,
        duration: duration,
        useNativeDriver: false,
      }),
      Animated.timing(squareSideLength, {
        toValue: toValueSize,
        duration: duration,
        useNativeDriver: false,
      }),
    ];
    Animated.parallel(animations).start();
  };

  const handleAnimation = () => {
    if (isShown) {
      animate(0, sideLength - 50, 1500);
    } else {
      animate(1, sideLength, 500);
    }
    setIsShown(!isShown);
  };

  return (
    <Pressable onPress={handleAnimation}>
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

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
