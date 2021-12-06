import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Landingpage} from '../features/landing/Landingpage';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Book from '../screens/Book';

const Stack = createNativeStackNavigator()

function RootStack() {
    return (
      <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{   headerShown: false,}}
        initialRouteName='Landingpage'
      >
        <Stack.Screen name='Landingpage' component={Landingpage} />
        <Stack.Screen name='Book' component={Book} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootStack
