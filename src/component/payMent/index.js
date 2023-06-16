import React from 'react';
import {Text, View, StatusBar, Dimensions} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonBottom from '../share/buttonBottom';
import TextPay from '../share/textPay';
const Payment = ({route}) => {
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
            style={{flexDirection: 'row', marginTop: 50, alignItems: 'center'}}>
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
                marginLeft: 30,
              }}>
              <AntDesign
                onPress={() => navigation.goBack()}
                size={20}
                color="white"
                name="left"
              />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 600,
                marginLeft: 35,
              }}>
              Selection Overview
            </Text>
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
                height: 390,
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
              <TextPay text="Screen" content="2nd" />
              <View style={{flexWrap: 'wrap', width: 220}}>
                <TextPay
                  text="Seats"
                  content={`${
                    position.length
                  } seats ( ${position.toString()} )`}
                />
              </View>
              <TextPay text="1 ticket" content="200 /-" />
              <TextPay
                text="Total Tickets"
                content={`${position.length} x 200`}
              />
              <View
                style={{
                  borderWidth: 0.2,
                  borderColor: '#6D9EFF',
                  marginTop: 6,
                }}></View>
              <TextPay text="Final Price" content={total} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 500,
                  marginTop: 50,
                }}>
                {title}
              </Text>
            </View>
          </View>
          <ButtonBottom
            text="Next"
            navi="checkout"
            total={total}
            ngay={ngay}
            time={time}
            position={position}
            title={title}
          />
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Payment;
