import {View} from 'react-native';
import styles from './FeedScreen.presets';
import ActivitiesList from './components/ActivitiesList/ActivitiesList';

export default function FeedScreen() {
  return (
    <View style={styles.layout}>
      <View style={styles.eventsListWrapper}>
        <ActivitiesList />
      </View>
    </View>
  );
}
