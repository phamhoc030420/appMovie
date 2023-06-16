import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Title = ({width, height, title, size, radius, flag, active, click}) => {
  const navigation = useNavigation();
  return (
    <View>
      {flag == true ? (
        <>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              active
                ? ['#00A8FF', '#3297CC', 'black']
                : ['transparent', 'transparent']
            }
            style={{
              width,
              height,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: radius,
              shadowColor: 'black',
              shadowOffset: {width: -100, height: -500},
              shadowOpacity: 1,
              shadowRadius: 100,
              elevation: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: size,
                color: 'white',
              }}>
              {title}
            </Text>
          </LinearGradient>
        </>
      ) : (
        <TextInput
          style={{
            width,
            height,
            backgroundColor: click ? '#02283c' : '#24272C',
            borderRadius: 50,
            shadowColor: '#ffff',
            shadowOffset: {width: -100, height: -500},
            shadowOpacity: 1,
            shadowRadius: 100,
            elevation: 2,
            paddingLeft: 20,
            fontSize: size,
            color: 'white',
          }}
          value={title}
          editable={false}
        />
      )}
    </View>
  );
};
export default Title;
