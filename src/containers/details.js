import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

const StyledContainer = styled.View`
  height: 100%;
  width: 100%;
  backgroundColor: white;
`;

const StyledTitle = styled.Text`
  fontSize: 20px;
  fontWeight: 500;
`;

const StyledPrice = styled.Text`
  fontSize: 18px;
  fontWeight: bold;
  color: green;
`;

const StyleImageContainer = styled.View`
  flex: 1;
`
const StyledTextContainer = styled.View`
  margin: 20px;
`

const Details = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {item = {}} = route.params;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    navigation.setOptions({title: item.title});
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StyledContainer>
        <StyleImageContainer>
          <Image
            resizeMode="center"
            source={{uri: item.image}}
            style={{width: '100%', height: '90%'}}
          />
        </StyleImageContainer>
        <StyledTextContainer>
          <StyledTitle>{item.title}</StyledTitle>
          <StyledPrice>${item.price}</StyledPrice>
          <Text>{item.description}</Text>
        </StyledTextContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default Details;
