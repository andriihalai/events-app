import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Event.presets';

interface PostProps {
  title: string;
  location: string;
  date: Date | string;
  photoUrl: string;
  description?: string;
}

export default function Event({title, location, date, photoUrl}: PostProps) {
  const newDate = new Date(date);

  return (
    <View style={styles.eventContainer}>
      <View style={styles.eventInfoSection}>
        <View>
          <Image style={styles.image} source={{uri: photoUrl}} />
        </View>
        <View style={styles.eventDetails}>
          <Text style={styles.postTitle}>{title}</Text>
          <Text>
            Date:
            {newDate.toLocaleDateString()}
          </Text>
          <Text>Location: {location}</Text>
        </View>
      </View>
      <View style={styles.btnsSection}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
