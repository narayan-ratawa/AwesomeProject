import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/loginSlice';

const StyledContainer = styled.View`
  alignItems: center;
  justifyContent: center;
  display: flex;
  flex: 1;
`;

const StyledButton = styled.TouchableOpacity`
  fontSize: 20px;
  borderWidth: 1px;
  borderRadius: 10px;
  backgroundColor: orange;
  shadowColor: #52006A,
  elevation: 20;
  paddingHorizontal: 50px;
  paddingVertical: 15px;
`;

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const loginCall = () => {
    dispatch(login(true))
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StyledContainer>
        <StyledButton onPress={loginCall}>
          <Text>Login</Text>
        </StyledButton>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default LoginScreen;
