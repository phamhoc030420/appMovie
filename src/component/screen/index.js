import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from '../share/header';
import Title from '../share/title';
import ButtonBottom from '../share/buttonBottom';
import LinearGradient from 'react-native-linear-gradient';
const Screen = ({route}) => {
  const {title, ngay, time} = route.params;
  const arr = Array.from({length: 100}, (_, index) => index + 1);
  const col = Array.from({length: 10}, (_, index) => index + 1);
  const [position, setPosition] = useState([]);
  const handleChoosePosition = item => {
    if (position.includes(item)) {
      const newPosition = position.filter(i => i !== item);
      setPosition(newPosition);
    } else {
      setPosition([...position, item]);
    }
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
          <Header title={title} search={true} />
          <View
            style={{
              marginHorizontal: 30,
              flexDirection: 'row',
              marginTop: 26,
            }}>
            <Title
              width={77}
              height={30}
              title={'English'}
              size={13}
              radius={5}
              flag={true}
              active={true}
            />
            <View style={{marginLeft: 10}}>
              <Title
                width={47}
                height={30}
                title={'3D'}
                size={13}
                radius={5}
                flag={true}
                active={true}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Title
                width={100}
                height={30}
                title={
                  `${ngay.day}` + ' ' + `${ngay.month}` + ',' + `${ngay.thu}`
                }
                size={13}
                radius={5}
                flag={true}
                active={true}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Title
                width={80}
                height={30}
                title={time}
                size={11}
                radius={5}
                flag={true}
                active={true}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 66,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 16,
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 100,
                  backgroundColor: 'white',
                }}></View>
              <Text style={{color: 'white', marginLeft: 5}}>Available</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 16,
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 100,
                  backgroundColor: '#605e5e',
                }}></View>
              <Text style={{color: 'white', marginLeft: 5}}>Occupied</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 100,
                  backgroundColor: '#00A8FF',
                }}></View>
              <Text style={{color: 'white', marginLeft: 5}}>Chosen</Text>
            </View>
          </View>
          <View style={{marginTop: 53, alignItems: 'center'}}>
            <Text style={{color: '#637394', fontSize: 16, fontWeight: 600}}>
              Screen
            </Text>
            <LinearGradient
              colors={['#00A8FF', '#24272C']}
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginTop: 8,
                width: '100%',
                height: 10,
              }}></LinearGradient>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 16,
              marginLeft: 4,
            }}>
            {arr.map((item, index) => (
              <>
                <View
                  key={index}
                  onTouchStart={() => handleChoosePosition(item)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    backgroundColor: position.includes(item)
                      ? '#00A8FF'
                      : 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 6,
                    marginBottom: 8,
                  }}>
                  <Text style={{color: 'black'}}>{item}</Text>
                </View>
              </>
            ))}
          </View>
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 340,
              borderRadius: 8,
              shadowOffset: {width: -4, height: 0},
              shadowColor: '#00A8FF',
              shadowOpacity: 1,
              elevation: 10,
              zIndex: 100,
            }}>
            {col.map((item, index) => (
              <>
                <View
                  key={index}
                  style={{
                    width: 26,
                    height: 40,
                    backgroundColor: '#24272C',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#637394'}}>{item}</Text>
                </View>
              </>
            ))}
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 500, fontSize: 16}}>
              Total: $ {position.length * 200}
            </Text>
          </View>
          {Object.keys(position).length > 0 ? (
            <ButtonBottom
              text="Next"
              navi={'pay'}
              position={position}
              total={position.length * 200}
              title={title}
              ngay={ngay}
              time={time}
            />
          ) : null}
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Screen;
