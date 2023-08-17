import React from 'react';
import { SafeAreaView } from 'react-native';
//import navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens
import MainScreen from './screens/MainScreen';
import CalenderScreen from './screens/CalenderScreen';
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';

//import navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";

//create a bottom tab navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="CalenderScreen" component={CalenderScreen} />
      <Tab.Screen name="LibraryScreen" component={LibraryScreen} />
    </Tab.Navigator>
  );
}


export default function App() {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


