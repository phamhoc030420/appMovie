import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabButton from './tabButton';
import Trailler from '../component/trailler';
import BookTicket from '../component/bookTicket';
import Screen from '../component/screen';
import Payment from '../component/payMent';
import Checkout from '../component/checkout';
import Ticket from '../component/ticket';
const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabButton} />
        <Stack.Screen name="book" component={BookTicket} />
        <Stack.Screen name="screen" component={Screen} />
        <Stack.Screen name="pay" component={Payment} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="ticket" component={Ticket} />
        <Stack.Screen name="traller" component={Trailler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
