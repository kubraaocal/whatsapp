import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

import ImageModal from './ImageModal';


const Card = ({navigation, item}) => {
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisible = () => {
    setisModalVisible(!isModalVisible);
    console.log("aaa",isModalVisible)
  };
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Message',{image:item.image,nickname:item.nickname})} >
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          height: 90,
          alignItems: 'center',
          width: windowWidth - 20,
        }}>
        <TouchableOpacity onPress={() => changeModalVisible(true)}>
          <View style={styles.view_image}>
            <Image
              resizeMode="cover"
              source={item.image}
              style={{
                borderRadius: 50,
                height: windowHeight / 11,
                width: windowWidth / 5,
              }}></Image>
          </View>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}>
          <ImageModal deger={changeModalVisible} image={item.image}/>
        </Modal>
        <View style={styles.view_text}>
          <Text style={styles.text_title}>{item.nickname}</Text>
          <View style={styles.view_message}>
            <Icon
              name="checkmark-done-outline"
              style={{fontSize: 20, color: 'gray'}}
            />
            <Text style={styles.text_text}>{item.text}</Text>
          </View>
        </View>
        <View style={styles.view_clock}>
          <Text style={styles.text_text}>10:35</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  text_text: {
    fontSize: 17,
    color: 'gray',
  },
  text_title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
  },
  view_message: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view_clock: {
    alignItems: 'flex-end',
    width: windowWidth / 9,
  },
  view_image: {
    width: windowWidth / 5,
  },
  view_text: {
    margin: 15,
    width: windowWidth / 1.8,
  },
});
