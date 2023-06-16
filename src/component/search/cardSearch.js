import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, StatusBar, Dimensions} from 'react-native';
import {Avatar, Button, Card} from 'react-native-paper';
const CardSearch = ({img, title}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <>
      <Card
        style={{
          width: (windowWidth - 60) / 2 - 10,
          backgroundColor: '#24272C',
        }}>
        <Card.Cover
          source={{uri: img === 'default' ? 'https://picsum.photos/700' : img}}
          theme={{roundness: 0}}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#24272C',
          }}
        />
        <Card.Content
          style={{
            backgroundColor: 'transparent',
            paddingTop: 5,
            elevation: 1,
            borderRadius: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            height: 60,
          }}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{color: 'white', fontSize: 14, fontWeight: 500}}>
            {title}
          </Text>
        </Card.Content>
      </Card>
    </>
  );
};
export default CardSearch;
