import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home/HomeScreen';
import FeedScreen from '../pages/Feed/FeedScreen';
import ProfileScreen from '../pages/Profile/ProfileScreen';
import {Image, StyleSheet} from 'react-native';
import {theme} from '../theme/theme';

const BottomTabNavigator = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.lightBlue,
          tabBarInactiveTintColor: theme.colors.black,
          tabBarActiveBackgroundColor: theme.colors.lightGray,
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
