import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, StatusBar, FlatList, ActivityIndicator} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from '../share/header';
import InputCustom from '../share/input';
import CardSearch from './cardSearch';
import {getDataSearch} from '../api';
const Search = ({route}) => {
  const [data, setData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setLoad(true);
    const getdata = async () => {
      const data = await getDataSearch();
      setData(JSON.parse(data).results);
      setDataSource(JSON.parse(data).results);
      setLoad(false);
    };
    getdata();
  }, []);
  useEffect(() => {
    if (!!search) {
      const newData = dataSource.filter(item => item.title.includes(search));
      setData(newData);
    } else setData(dataSource);
  }, [search]);
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
          <Header title="Search" search={true} />
          <InputCustom search={search} setSearch={setSearch} flag={true} />
          {load ? (
            <ActivityIndicator
              style={{marginTop: 10}}
              size="large"
              color="red"
            />
          ) : (
            <View
              style={{
                marginTop: 20,
                marginHorizontal: 20,
                position: 'absolute',
                top: 160,
                bottom: 100,
              }}>
              {Object.keys(data).length > 0 ? (
                <FlatList
                  data={data}
                  keyExtractor={item => item.id}
                  horizontal={false}
                  numColumns={2}
                  key={2}
                  showsVerticalScrollIndicator={false}
                  columnWrapperStyle={{marginRight: 20}}
                  renderItem={({item}) => (
                    <View style={{marginBottom: 20, marginHorizontal: 10}}>
                      <CardSearch
                        img={item.image?.url ?? 'default'}
                        title={item.title}
                      />
                    </View>
                  )}
                />
              ) : (
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 20,
                    marginLeft: 30,
                    fontSize: 16,
                    fontWeight: 500,
                  }}>
                  Not available
                </Text>
              )}
            </View>
          )}
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default Search;
