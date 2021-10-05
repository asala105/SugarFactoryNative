import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

