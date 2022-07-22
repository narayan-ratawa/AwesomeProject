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
      <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Image
            resizeMode="center"
            source={{uri: item.image}}
            style={{width: '100%', height: '90%'}}
          />
        </View>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 20, fontWeight: '500'}}>{item.title}</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'green'}}>
            ${item.price}
          </Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
