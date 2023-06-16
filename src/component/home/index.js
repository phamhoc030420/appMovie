import React, {useEffect, useState, createContext} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../assets/define';
import InputCustom from '../share/input';
import {getDataMovie, getDataVideo} from '../api';
import CardItem from './card';
const Home = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  const windowWidth = Dimensions.get('window').width;
  const [loading, setLoading] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setLoading(true);
    setLoadingVideo(true);
    const getdata = async () => {
      const data = await getDataMovie();
      setDataMovie(JSON.parse(data).d);
      setLoading(false);
    };
    getdata();
    const getdataVideo = async () => {
      const data = await getDataVideo();
      setDataVideo(JSON.parse(data).resource.videos);
      setLoadingVideo(false);
    };
    getdataVideo();
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
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 50,
              marginHorizontal: 30,
            }}>
            <View>
              <Text style={[styles.text, {fontSize: 24, fontWeight: 700}]}>
                Hello User
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={[
                    styles.text,
                    {fontSize: 18, fontWeight: 500, marginRight: 4},
                  ]}>
                  Surat
                </Text>
                <Ionicons
                  size={16}
                  style={styles.text}
                  name="ios-location-outline"
                />
              </View>
            </View>
            <Image
              style={{width: 64, height: 64, resizeMode: 'cover'}}
              source={require('../../assets/image/avatar.png')}
            />
          </View>
          <InputCustom search={search} setSearch={setSearch} flag={false} />
          {loading ? (
            <ActivityIndicator
              style={{marginTop: 10}}
              size="large"
              color="red"
            />
          ) : (
            <View>
              <FlatList
                style={{marginHorizontal: 30}}
                data={dataMovie}
                keyExtractor={(item, index) => index}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <View style={{marginTop: 20, alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>List movie</Text>
                  </View>
                }
                renderItem={({item}) => (
                  <View>
                    <Image
                      source={{uri: item?.i?.imageUrl}}
                      style={{
                        width: windowWidth - 60,
                        height: 200,
                        resizeMode: 'cover',
                        borderRadius: 8,
                        marginTop: 20,
                        marginRight: 30,
                      }}
                    />
                  </View>
                )}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              {marginLeft: 30, fontSize: 20, fontWeight: 500, marginTop: 20},
            ]}>
            Features Movies
          </Text>
          {loadingVideo ? (
            <ActivityIndicator
              style={{marginTop: 10}}
              size="large"
              color="red"
            />
          ) : (
            <View>
              <FlatList
                style={{marginHorizontal: 30}}
                data={dataVideo}
                keyExtractor={(item, index) => index}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <View style={{marginTop: 20, alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>List movie</Text>
                  </View>
                }
                renderItem={({item}) => (
                  <CardItem
                    img={item.primaryTitle.image.url}
                    title={item.description}
                  />
                )}
              />
            </View>
          )}
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Home;
