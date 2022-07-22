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
import Card from '../components/card';

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
          <Card
            key={item.title}
            item={item}
            handleAdd={handleAdd}
            onClick={item => navigation.navigate('DetailsScreen', {item})}
            buttonTitle={"Add to Card"}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
