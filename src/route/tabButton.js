import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MenuProvider} from 'react-native-popup-menu';
const Tab = createBottomTabNavigator();
import {View} from 'react-native';
import Home from '../component/home';
import Search from '../component/search';
const TabButton = () => {
  return (
    <MenuProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: '#24272C',
            shadowColor: '#ffff',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            height: 85,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            paddingTop: 10,
            position: 'absolute',
            bottom: 0,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="page"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: focused ? '#02283c' : '#24272C',
                  shadowColor: '#ffff',
                  shadowOffset: {width: -100, height: -500},
                  shadowOpacity: 1,
                  shadowRadius: 100,
                  elevation: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Foundation name="home" size={30} color={'white'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: focused ? '#02283c' : '#24272C',
                  shadowColor: '#ffff',
                  shadowOffset: {width: -100, height: -500},
                  shadowOpacity: 1,
                  shadowRadius: 100,
                  elevation: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome name="search" size={30} color="white" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="page3"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: focused ? '#02283c' : '#24272C',
                  shadowColor: '#ffff',
                  shadowOffset: {width: -100, height: -500},
                  shadowOpacity: 1,
                  shadowRadius: 100,
                  elevation: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="local-movies" size={30} color={'white'} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </MenuProvider>
  );
};
export default TabButton;
