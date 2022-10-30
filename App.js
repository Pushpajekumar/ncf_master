// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import NavigationString from './src/constants/NavigationString'
import * as Screens from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={NavigationString.HOME}
        screenOptions={{
         headerShown: false,
         tabBarShowLabel: false,
       }}
      >
        <Tab.Screen 
        name={NavigationString.HOME} 
        component={Screens.Home} 
        options={{
          tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', }} >
               <Feather name="menu" size={24} color="black" />
                <Text style={{color: focused ? "black" : "gray"}}>Home</Text>
              </View> 
          )
        }}
        />
        <Tab.Screen 
        name={NavigationString.LOCATION} 
        component={Screens.Location}
        options={{
          tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', }} >
               <EvilIcons name="location" size={24} color="black" />
                <Text style={{color: focused ? "black" : "gray"}}>Location</Text>
              </View> 
          )
        }}
        />
        <Tab.Screen 
        name={NavigationString.BUZZ} 
        component={Screens.Buzz} 
        options={{
          tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', }} >
              <AntDesign name="bulb1" size={24} color="black" />
                <Text style={{color: focused ? "black" : "gray"}}>Buzz</Text>
              </View> 
          )
        }}
        />
        <Tab.Screen 
        name={NavigationString.NOTIFICATION} 
        component={Screens.Notifications} 
        options={{
          tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', }} >
              <Ionicons name="notifications-outline" size={24} color="black" />
                <Text style={{color: focused ? "black" : "gray"}}>Notification</Text>
              </View> 
          )
        }}
        />
        <Tab.Screen 
        name={NavigationString.PROFILE} 
        component={Screens.Profile} 
        options={{
          tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', }} >
              <AntDesign name="user" size={24} color="black" />
                <Text style={{color: focused ? "black" : "gray"}}>Profile</Text>
              </View> 
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;