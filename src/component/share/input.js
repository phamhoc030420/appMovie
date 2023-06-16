import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const InputCustom = ({search, setSearch, flag}) => {
  const navigation = useNavigation();
  const handleNext = () => {
    if (!flag) {
      navigation.navigate('search');
    }
    return;
  };
  return (
    <View
      style={{alignItems: 'center', marginTop: 20, marginHorizontal: 30}}
      onTouchStart={handleNext}>
      <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#24272C',
          borderRadius: 50,
          shadowColor: '#ffff',
          shadowOffset: {width: -100, height: -500},
          shadowOpacity: 1,
          shadowRadius: 100,
          elevation: 2,
          paddingLeft: 20,
          fontSize: 18,
          color: 'white',
        }}
        placeholder="Search"
        placeholderTextColor="#737886"
      />
      <Feather
        size={18}
        style={{color: '#737886', position: 'absolute', top: 10, right: 15}}
        name="mic"
      />
    </View>
  );
};
export default InputCustom;
