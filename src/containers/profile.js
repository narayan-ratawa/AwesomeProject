import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  FlatList,
  View,
  Image
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import {logout} from '../reducers/loginSlice';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`

  margin: 30px;
  fontSize: 20px;
  borderWidth: 1px;
  borderRadius: 10px;
  backgroundColor: orange;
  shadowColor: #52006A,
  elevation: 20;
  paddingHorizontal: 50px;
  paddingVertical: 15px;
`;

const arrData = [
  {title: 'Name', value: 'Narayan Ratawa'},
  {title: 'Mobile', value: '+91-9876543210'},
  {title: 'Email', value: 'narayan@gmail.com'},
];

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const logoutCall = () => {
    dispatch(logout(false));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{padding: 50}}>
        <View
          style={{
            borderWidth: 0.5,
            height: 150,
            width: 150,
            borderRadius: 75,
            alignSelf: 'center',
            overflow: 'hidden'
          }}>
            <Image style={{height:'100%', width:'100%'}} source={{uri:"https://avatars.githubusercontent.com/u/41002657?v=4"}} />
          </View>
      </View>
      <FlatList
        data={arrData}
        keyExtractor={item => item.title}
        renderItem={(item, index) => (
          <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
            <Text style={{flex: 0.5, color: 'black'}}>{item.item.title}</Text>
            <Text style={{flex: 1}}>{item.item.value}</Text>
          </View>
        )}
      />

      <StyledButton onPress={logoutCall}>
        <Text style={{textAlign:'center'}}>Logout</Text>
      </StyledButton>
    </SafeAreaView>
  );
};

export default Profile;
