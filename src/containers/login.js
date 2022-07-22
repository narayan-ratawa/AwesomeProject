import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StyledContainer>
        <StyledButton onPress={() => navigation.navigate('HomeMain')}>
          <Text>Login</Text>
        </StyledButton>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default LoginScreen;
