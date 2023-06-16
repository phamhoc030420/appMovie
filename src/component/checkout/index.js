import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, StatusBar, Dimensions, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RadioButton, TextInput} from 'react-native-paper';
import ButtonBottom from '../share/buttonBottom';
import LottieView from 'lottie-react-native';
const Checkout = ({route}) => {
  const {position, total, title, ngay, time} = route.params;
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [showLottie, setShowLottie] = useState(false);
  const handlePayment = () => {
    setShowLottie(true);
    setTimeout(() => {
      navigation.navigate('ticket', {position, total, title, ngay, time});
    }, 2000);
  };
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
          {showLottie && (
            <LottieView
              style={{zIndex: 10}}
              source={require('../../assets/animation/sucsess.json')}
              autoPlay
              loop={false}
              onAnimationFinish={() => setShowLottie(false)}
            />
          )}
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
              Payment Window
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 56,
              marginHorizontal: 30,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 500}}>
              Amount to be paid
            </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 500}}>
              {total}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: 'white',
              marginTop: 40,
              marginHorizontal: 30,
            }}>
            Payment Options
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              marginHorizontal: 30,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <RadioButton status="checked" color="#2280EF" />
            <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
              Credit/Debit Card
            </Text>
            <View
              style={{
                width: 70,
                height: 24,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{resizeMode: 'cover'}}
                source={require('../../assets/image/visa.png')}
              />
            </View>
            <View
              style={{
                width: 70,
                height: 24,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{resizeMode: 'cover'}}
                source={require('../../assets/image/card.png')}
              />
            </View>
          </View>
          <View
            style={{
              width: 330,
              height: 56,
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 12,
              marginHorizontal: 30,
              width: windowWidth - 60,
              marginTop: 16,
            }}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: 400}}>
              Pay securely with your Bank Account using Visa or Mastercard
            </Text>
          </View>
          <View style={{marginHorizontal: 30, marginTop: 16}}>
            <TextInput
              label="Label"
              mode="outlined"
              theme={{colors: {background: '#24272C', primary: '#cdcdcd'}}}
              backgroundColor="rgba(0,0,0,0)"
              textColor="white"
              outlineStyle={{borderRadius: 16}}
            />
            <TextInput
              label="Name on Card"
              mode="outlined"
              theme={{colors: {background: '#24272C', primary: '#cdcdcd'}}}
              backgroundColor="rgba(0,0,0,0)"
              outlineStyle={{borderRadius: 16}}
              textColor="white"
              style={{marginTop: 16}}
            />
            <View style={{marginTop: 16, flexDirection: 'row'}}>
              <TextInput
                label="Expire Date"
                mode="outlined"
                theme={{colors: {background: '#24272C', primary: '#cdcdcd'}}}
                backgroundColor="rgba(0,0,0,0)"
                textColor="white"
                outlineStyle={{borderRadius: 16}}
                style={{width: (windowWidth - 60) / 2 - 10}}
              />
              <TextInput
                label="CVV Code"
                mode="outlined"
                theme={{colors: {background: '#24272C', primary: '#cdcdcd'}}}
                backgroundColor="rgba(0,0,0,0)"
                textColor="white"
                outlineStyle={{borderRadius: 16}}
                style={{width: (windowWidth - 60) / 2 - 20, marginLeft: 30}}
              />
            </View>
          </View>
        </View>
        <View
          onTouchStart={handlePayment}
          style={{position: 'relative', bottom: 0}}>
          <ButtonBottom navi="ticket" text="Checkout" />
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Checkout;
