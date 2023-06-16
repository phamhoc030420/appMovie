import React, {useEffect, useState, createContext, useRef} from 'react';
import {Text, View, StatusBar, FlatList} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getDataMovie, getDataVideo} from '../api';
import Header from '../share/header';
import Title from '../share/title';
import ButtonBottom from '../share/buttonBottom';
const BookTicket = ({route}) => {
  const {title} =
    route.params ||
    'You havent made any payments yet payments yetpayments yetr';
  const [data, setData] = useState([]);
  const [dataDate, setDataDate] = useState([]);
  const [choose, setChoose] = useState(0);
  const [time, setTime] = useState(null);
  const [time1, setTime1] = useState(null);
  const [ngay, setNgay] = useState(null);
  useEffect(() => {
    const currentDate = new Date();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const nameMonth = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let data = [];
    const i = new Date();
    setNgay({
      day: currentDate.getDate(),
      month: nameMonth[i.getMonth()],
      thu: weekdays[i.getDay()],
    });
    const getData = () => {
      for (let day = currentDate.getDate(); day <= lastDayOfMonth; day++) {
        let date = new Date();
        date.setDate(day);
        date.setMonth(date.getMonth());
        date.setFullYear(date.getFullYear());
        let result = {
          day,
          month: nameMonth[date.getMonth()],
          thu: weekdays[date.getDay()],
        };
        data.push(result);
      }
    };
    getData();
    setDataDate(data);
  }, []);

  useEffect(() => {
    const getdata = async () => {
      const data = await getDataMovie();
      setData(JSON.parse(data).d);
    };
    getdata();
  }, []);
  const handleGetNgay = (item, index) => {
    setChoose(index);
    setNgay(item);
  };
  const componentDate = (day, month, thu) => {
    return (
      <View>
        <Text style={{color: 'white'}}>{day}</Text>
        <Text style={{color: 'white'}}>{month}</Text>
        <Text style={{color: 'white'}}>{thu}</Text>
      </View>
    );
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
          </View>
          <View style={{marginHorizontal: 30, marginTop: 15}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
              Choose Date and Time
            </Text>
            <View style={{marginTop: 15}}>
              <FlatList
                data={dataDate}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => (
                  <View onTouchStart={() => handleGetNgay(item, index)}>
                    <Title
                      width={75}
                      height={90}
                      title={componentDate(item.day, item.month, item.thu)}
                      size={11}
                      radius={5}
                      flag={true}
                      active={choose === index ? true : false}
                    />
                  </View>
                )}
              />
            </View>
          </View>
          <View style={{marginTop: 30, marginHorizontal: 30}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 400}}>
              PVR: Rahul Raj Mall
            </Text>
            <View
              style={{flexDirection: 'row', marginTop: 15, flexWrap: 'wrap'}}>
              {[
                '8:00 AM',
                '9:30 AM',
                '11:30 AM',
                '2:00 PM',
                '5:00 PM',
                '9:00 PM',
              ].map((item, index) => (
                <View
                  key={index}
                  style={{marginRight: 10, marginBottom: 10}}
                  onTouchStart={() => setTime(item)}>
                  <Title
                    click={time === item ? true : false}
                    title={item}
                    width={75}
                    height={38}
                    size={11}
                    flag={false}
                  />
                </View>
              ))}
            </View>
          </View>
          <View style={{marginTop: 30, marginHorizontal: 30}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 400}}>
              INOX: VR Mall
            </Text>
            <View
              style={{flexDirection: 'row', marginTop: 15, flexWrap: 'wrap'}}>
              {[
                '8:00 AM',
                '9:30 AM',
                '11:30 AM',
                '2:00 PM',
                '5:00 PM',
                '9:00 PM',
              ].map((item, index) => (
                <View
                  key={index}
                  style={{marginRight: 10, marginBottom: 10}}
                  onTouchStart={() => setTime1(item)}>
                  <Title
                    click={time1 === item ? true : false}
                    title={item}
                    width={75}
                    height={38}
                    size={11}
                    flag={false}
                  />
                </View>
              ))}
            </View>
          </View>
          {!ngay || !time ? null : (
            <ButtonBottom
              text="Next"
              navi="screen"
              title={title}
              ngay={ngay}
              time={time}
            />
          )}
        </View>
      </SafeAreaProvider>
    </>
  );
};
export default BookTicket;
