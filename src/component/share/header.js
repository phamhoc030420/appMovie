import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, createContext} from 'react';
import {Text, View, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Header = ({title, search}) => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 50,
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 100,
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            onPress={() => navigation.goBack()}
            size={20}
            color="white"
            name="left"
          />
        </View>
        <Text
          numberOfLines={3}
          style={{
            color: 'white',
            width: 200,
            marginLeft: (windowWidth - 200) / 2 - 30 - 44,
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
          width: 44,
          height: 44,
          borderRadius: 100,
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {search ? (
          <AntDesign size={20} color="white" name="search1" />
        ) : (
          <AntDesign size={20} color="white" name="upload" />
        )}
      </View>
    </View>
  );
};
export default Header;
