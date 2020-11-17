import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './pages/LoginScreen';
import Launchpage from './pages/Launchpage';
import Profile from './pages/Profile';
import Statement from './pages/Statement';

export default function Routes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Login' component={LoginScreen} />
        <Screen name='Launchpage' component={Launchpage} />
        <Screen name='Profile' component={Profile} />
        <Screen name='Statement' component={Statement} />
      </Navigator>
    </NavigationContainer>
  );
}
