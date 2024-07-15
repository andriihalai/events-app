import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Activity.presets';

interface IActivityProps {
  title: string;
  location: string;
  date: Date | string;
  photoUrl: string;
  description?: string;
}

export default function Activity({
  title,
  location,
  date,
  photoUrl,
}: IActivityProps) {
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
      <View style={styles.buttonsSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
