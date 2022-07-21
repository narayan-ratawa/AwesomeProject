import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {remove} from '../reducers/cartSlice';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const handleRemove = productId => {
    dispatch(remove(productId));
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        {products.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsScreen', {item})}
            key={item.title}
            style={{
              backgroundColor: 'white',
              margin: 15,
              padding: 15,
              marginBottom: 0,
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 5,
              shadowColor: '#52006A',
              elevation: 20,
              flexDirection: 'row',
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <Image
                resizeMode="center"
                source={{uri: item.image}}
                style={{height: 150, width: 150}}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Text numberOfLines={2} style={{}}>
                {item.title}
              </Text>
              <Text>${item.price}</Text>
              <TouchableOpacity
                onPress={() => handleRemove(item.id)}
                style={{
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 2,
                  borderRadius: 5,
                  alignItems: 'center',
                }}>
                <Text>{'Remove'}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
