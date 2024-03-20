import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home/index';
import Setting from '../../Screens/Setting/index';

export const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return <MainStack />;
};

export default StackNavigation;