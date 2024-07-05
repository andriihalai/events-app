import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import FeedScreen from '../pages/FeedScreen';
import ProfileScreen from '../pages/ProfileScreen';
import {Image, StyleSheet} from 'react-native';
import COLORS from '../theme/colors';

const BottomTabNavigator = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.lightblue,
          tabBarInactiveTintColor: COLORS.black,
          tabBarActiveBackgroundColor: COLORS.lightgray,
          tabBarLabelStyle: {fontSize: 20},
          tabBarStyle: {height: 100},
        }}>
        <BottomTabNavigator.Group>
          <BottomTabNavigator.Screen
            name="Home"
            component={HomeScreen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () => (
                <Image
                  source={require('./../assets/HomeIcon.png')}
                  style={styles.icon}
                />
              ),
            }}
          />
          <BottomTabNavigator.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () => (
                <Image
                  source={require('./../assets/FeedIcon.png')}
                  style={styles.icon}
                />
              ),
            }}
          />
          <BottomTabNavigator.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () => (
                <Image
                  source={require('./../assets/ProfileIcon.png')}
                  style={styles.icon}
                />
              ),
            }}
          />
        </BottomTabNavigator.Group>
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
