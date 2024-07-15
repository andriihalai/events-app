import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home/HomeScreen';
import FeedScreen from '../pages/Feed/FeedScreen';
import ProfileScreen from '../pages/Profile/ProfileScreen';
import {theme} from '../theme/theme';
import Home from '../assets/svg/HomeIcon';
import {EarthIcon, ProfileIcon} from '../assets/svg/index';

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
              tabBarIcon: () => <Home width={40} height={40} />,
            }}
          />
          <BottomTabNavigator.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () => <EarthIcon width={40} height={40} />,
            }}
          />
          <BottomTabNavigator.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () => <ProfileIcon width={40} height={40} />,
            }}
          />
        </BottomTabNavigator.Group>
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
