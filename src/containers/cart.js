import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {remove} from '../reducers/cartSlice';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Card from '../components/card';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const handleRemove = product => {
    dispatch(remove(product.id));
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        {products.length === 0 && (
          <Image
            style={{height: 300, width: 300, alignSelf: 'center'}}
            source={{
              uri: 'https://shop.millenniumbooksource.com/static/images/cart1.png',
            }}
          />
        )}
        {products.map((item, index) => (
          <Card
            key={item.title}
            item={item}
            handleAdd={handleRemove}
            onClick={item => navigation.navigate('DetailsScreen', {item})}
            buttonTitle={'Remove'}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
