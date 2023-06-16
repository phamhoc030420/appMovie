import React, {useEffect, useState, createContext, useRef} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Button, Card} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import styles from '../../assets/define';
import {getDataMovie, getDataVideo} from '../api';
import Video from 'react-native-video';
import Title from '../share/title';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../share/header';
import ButtonBottom from '../share/buttonBottom';
const Trailler = ({route}) => {
  const {title} = route.params;
  const windowWidth = Dimensions.get('window').width;
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const getdata = async () => {
      const data = await getDataMovie();
      setData(JSON.parse(data).d);
    };
    getdata();
  }, []);
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
          <Header title={title} search={false} />
          <View>
            <Video
              source={require('../../assets/video/video1.mp4')}
              style={{
                height: 155,
                marginHorizontal: 30,
                width: windowWidth - 60,
                marginTop: 30,
                borderRadius: 15,
                borderWidth: 0.5,
                borderColor: 'white',
              }}
              controls
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              justifyContent: 'space-between',
              marginTop: 23,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/image/star.png')} />
              <Text style={{color: 'white', marginLeft: 5}}>
                7.4/10 reviewer{' '}
              </Text>
            </View>
            <Text style={{color: 'white'}}>2h 6 min</Text>
          </View>
          <View
            style={{alignItems: 'center', marginTop: 20, marginHorizontal: 30}}>
            <Title
              width={windowWidth - 60}
              size={18}
              height={40}
              title="Add your rating & review"
              flag={false}
            />
            <Image
              style={{position: 'absolute', top: 15, right: 15}}
              source={require('../../assets/image/next.png')}
            />
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 30, marginTop: 27}}>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'white',
                marginRight: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{color: 'white'}}>Action</Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'white',
                marginRight: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{color: 'white'}}>Adventure</Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text style={{color: 'white'}}>Comedy</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 30, marginTop: 23}}>
            <Title
              title="2D, 3D, 4DX"
              width={110}
              height={35}
              size={12}
              flag={false}
            />
          </View>
          <View style={{marginHorizontal: 30, marginTop: 23}}>
            <Title
              title="English, Hindi, +4 "
              width={140}
              height={35}
              size={12}
              flag={false}
            />
          </View>
          <View style={{marginHorizontal: 30, marginTop: 23}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 400}}>
              Doctor Strange teams up with a mysterious teenage girl from his
              dreams who can travel...
              <Text>read more</Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 600,
                marginLeft: 30,
                marginTop: 23,
              }}>
              Cast
            </Text>
            <FlatList
              style={{marginHorizontal: 30}}
              data={data}
              keyExtractor={(item, index) => index}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={{marginHorizontal: 15, marginTop: 20}}>
                  <Image
                    style={{width: 70, height: 70, borderRadius: 100}}
                    source={{uri: item?.i?.imageUrl}}
                  />
                </View>
              )}
            />
          </View>
          <ButtonBottom text="Book Tickets" title={title} navi="book" />
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Trailler;
