import React, {useEffect, useState, createContext} from 'react';
import {Text, View, Image, StatusBar, Dimensions, FlatList} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button, Card, AirbnbRating} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import styles from '../../assets/define';
const CardItem = ({title, img}) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        onTouchStart={() => navigation.navigate('traller', {title})}
        style={{
          marginRight: 30,
          marginTop: 15,
          borderRadius: 10,
          height: 280,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 147,
            height: 210,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          source={{
            uri: img,
          }}
        />
        <View style={{width: 147, marginTop: 10}}>
          <Text
            style={{color: 'white', textAlign: 'center'}}
            numberOfLines={2}
            ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AirbnbRating size={10} reviews={[]} />
        </View>
      </View>
    </>
  );
};
export default CardItem;
