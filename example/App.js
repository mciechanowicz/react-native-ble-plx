import React from 'react'
import { StatusBar } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import { HomeScreen } from './src/screens/Home'
import { DeviceDetailsScreen } from './src/screens/DeviceDetails'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen name="DeviceDetails" component={DeviceDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Toast />
    </SafeAreaProvider>
  )
}

export default App
