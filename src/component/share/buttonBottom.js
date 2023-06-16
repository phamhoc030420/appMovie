import React, {useEffect, useState, createContext} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const ButtonBottom = ({text, title, navi, ngay, time, position, total}) => {
  const navigation = useNavigation();
  const handleNextScreen = () => {
    if (navi === 'screen') {
      navigation.navigate(navi, {title, ngay, time});
    } else if (navi === 'pay') {
      navigation.navigate(navi, {position, total, title, ngay, time});
    } else if (navi === 'checkout') {
      navigation.navigate(navi, {position, total, title, ngay, time});
    } else if (navi === 'ticket') {
      return;
    } else {
      navigation.navigate(navi, {title});
    }
  };
  return (
    <View
      style={{
        height: 70,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'transparent',
        shadowColor: 'white',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Button
      title="Book Tickets"
      containerStyle={{width: 214, height: 40, borderRadius: 10}}
    /> */}
      <View onTouchStart={handleNextScreen}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#00A8FF', '#3297CC', '#192f6a']}
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 10,
          }}>
          <Text
            style={{
              width: 214,
              fontSize: 16,
              fontWeight: 500,
              fontFamily: 'Gill Sans',
              textAlign: 'center',
              margin: 10,
              color: '#ffffff',
              backgroundColor: 'transparent',
            }}>
            {text}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};
export default ButtonBottom;
