import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const Card = props => {
  const {item, buttonTitle = ''} = props;
  return (
    <TouchableOpacity
      onPress={() => props.onClick(item)}
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
          onPress={() => props.handleAdd(item)}
          style={{
            padding: 10,
            borderColor: 'gray',
            borderWidth: 2,
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <Text>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
