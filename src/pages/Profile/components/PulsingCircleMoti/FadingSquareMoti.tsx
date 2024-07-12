import {AnimatePresence, MotiView, View} from 'moti';
import {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';

export default function PulsingCircle({
  width,
  maxWidth,
}: {
  width: number;
  maxWidth: number;
}) {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  return (
    <View>
      <AnimatePresence>
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <View style={styles.container}>
            {isPressed && (
              <PulsingAnimation width={width} maxWidth={maxWidth} delay={650} />
            )}
            {isPressed && (
              <PulsingAnimation
                width={width}
                maxWidth={maxWidth}
                delay={1000}
              />
            )}
          </View>
        </Pressable>
      </AnimatePresence>
    </View>
  );
}

function PulsingAnimation({
  width,
  maxWidth,
  delay,
}: {
  width: number;
  maxWidth: number;
  delay: number;
}) {
  return (
    <MotiView
      style={styles.square}
      from={{width, height: width, opacity: 0.3}}
      animate={{width: maxWidth, height: maxWidth, opacity: 0}}
      transition={{
        type: 'timing',
        loop: true,
        delay,
        duration: 1500,
        repeatReverse: false,
      }}
    />
  );
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#BF363D',
    borderRadius: 300,
    width: 200,
    height: 200,
    position: 'absolute',
  },
  container: {
    backgroundColor: '#BF363D',
    borderRadius: 300,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
