import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import HomeScreen from '../containers/home';
import Details from '../containers/details';
import CartScreen from '../containers/cart';
import LoginScreen from '../containers/login';
import Profile from '../containers/profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="DetailsScreen" component={Details} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Stack.Screen name="DetailsScreen" component={Details} />
    </Stack.Navigator>
  );
};

const Home = () => {
  const products = useSelector(state => state.cart);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';
          
          if (route.name === 'Cart') {
            iconName = 'cart';
          } else if (route.name === 'Profile') {
            iconName = 'account-settings';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{tabBarBadge: products.length}}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const MainRoute = () => {
  const isLogin = useSelector(state => state.login);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLogin != true ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="HomeMain" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
