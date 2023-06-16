import React from 'react';
import {Text, View, StatusBar, Dimensions, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonBottom from '../share/buttonBottom';
import TextPay from '../share/textPay';
const Ticket = ({route}) => {
  const {position, total, title, ngay, time} = route.params;
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#24272C"
          translucent
        />
        <View
          style={{
            backgroundColor: '#24272C',
            flex: 1,
            position: 'relative',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 30,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 600,
              }}>
              Your Ticket
            </Text>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 100,
                shadowOffset: {width: 1, height: 1},
                position: 'absolute',
                right: 0,
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 30,
              }}>
              <AntDesign
                onPress={() => navigation.goBack()}
                size={20}
                color="white"
                name="sharealt"
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 46,
            }}>
            <View
              style={{
                width: 330,
                backgroundColor: 'transparent',
                height: 600,
                borderRadius: 4,
                shadowColor: 'black',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 1,
                padding: 16,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{width: 306, height: 306, resizeMode: 'cover'}}
                  source={require('../../assets/image/qr.png')}
                />
              </View>
              <Text
                style={{
                  color: '#637394',
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: 400,
                }}>
                Scan QR Code At Cinema
              </Text>
              <View
                style={{
                  borderWidth: 0.2,
                  borderColor: '#6D9EFF',
                  marginTop: 6,
                }}></View>
              <View style={{marginTop: 18}}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 20,
                  }}>
                  {title}
                </Text>
                <TextPay text="Cinema" content="PVR: Rahul Raj Mall" />
                <TextPay
                  text="Date"
                  content={
                    `${ngay.day}` +
                    ' ' +
                    `${ngay.month}` +
                    ',' +
                    `${ngay.thu} ${time}`
                  }
                />
                <View style={{flexWrap: 'wrap', width: 220}}>
                  <TextPay
                    text="Seats"
                    content={`${
                      position.length
                    } seats ( ${position.toString()} )`}
                  />
                </View>
                <TextPay text="Cost" content={total} />
              </View>
            </View>
          </View>
          <ButtonBottom navi="page" text="Home" />
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Ticket;
