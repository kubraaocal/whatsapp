import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const CardSettings = ({item}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 10,
          height: 50,
          alignItems: 'center',
          width: windowWidth - 20,
        }}>
        <View style={styles.view_image}>
          <Icon color="green" name={item.iconname} size={20} />
        </View>
        <View style={styles.view_text}>
          <Text style={styles.text_title}>{item.nickname}</Text>
          <Text style={styles.text_text}>{item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardSettings;

const styles = StyleSheet.create({
  text_text: {
    fontSize: 14,
    color: 'gray',
  },
  text_title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
  },
  view_message: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view_image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth / 5,
  },
  view_text: {
    margin: 5,
    width: windowWidth / 1.5,
  },
});
