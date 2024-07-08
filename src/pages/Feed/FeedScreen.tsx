import {View} from 'react-native';
import styles from './FeedScreen.presets';
import ListOfEvents from '../../components/ListOfEvents/ListOfEvents';

export default function FeedScreen() {
  return (
    <View style={styles.layout}>
      <View style={styles.eventsListWrapper}>
        <ListOfEvents />
      </View>
    </View>
  );
}
