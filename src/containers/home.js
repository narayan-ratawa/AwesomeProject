import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../reducers/cartSlice';
import {fetchProducts} from '../reducers/productSlice';
import {STATUSES} from '../reducers/productSlice';

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.product);
  //   const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (status === STATUSES.LOADING) {
    return <Text>Loading....</Text>;
  }

  if (status === STATUSES.ERROR) {
    return <Text>Something went wrong!</Text>;
  }
  const handleAdd = product => {
    dispatch(add(product));
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
              <Text numberOfLines={2} style={{fontSize: 15, fontWeight: '500'}}>
                {item.title}
              </Text>
              <Text>${item.price}</Text>
              <TouchableOpacity
                onPress={() => handleAdd(item)}
                style={{
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 2,
                  borderRadius: 5,
                  alignItems: 'center',
                }}>
                <Text>{'Add To Cart'}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
