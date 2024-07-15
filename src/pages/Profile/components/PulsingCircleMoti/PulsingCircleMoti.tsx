import {AnimatePresence, MotiView, View} from 'moti';
import {useState} from 'react';
import {Pressable} from 'react-native';
import styles from './PulsingCircleMoti.presets';

function PulsingAnimation({delay}: {delay: number}) {
  return (
    <MotiView
      style={styles.pulsingCircle}
      from={{opacity: 1, scale: 1}}
      animate={{opacity: 0, scale: 2}}
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

export default function PulsingCircle() {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  return (
    <View>
      <AnimatePresence>
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <View style={styles.pulsingCircleContainer}>
            {isPressed && <PulsingAnimation delay={650} />}
            {isPressed && <PulsingAnimation delay={1000} />}
          </View>
        </Pressable>
      </AnimatePresence>
    </View>
  );
}
