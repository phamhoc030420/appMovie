import React from 'react';
import {Text, View} from 'react-native';
const TextPay = ({text, content}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text
        style={{
          color: '#637394',
          fontSize: 14,
          fontWeight: 400,
          width: 74,
        }}>
        {text}
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 14,
          fontWeight: 500,
          marginLeft: 20,
        }}>
        {content}
      </Text>
    </View>
  );
};
export default TextPay;
