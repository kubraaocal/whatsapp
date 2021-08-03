import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Message = ({navigation, route}) => {
  const data = route.params;


  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header1}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Chats')}>
            <Icon style={styles.back_icon} name="arrow-back" />
            <Image style={styles.image} source={data.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('PersonProfile',{image:data.image,nickname:data.nickname})}>
            <Text style={styles.title}>{data.nickname}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header2}>
          <TouchableOpacity>
            <Icon name="call" color="white" style={styles.header_icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="videocam" color="white" style={styles.header_icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="ellipsis-vertical"
              color="white"
              style={styles.header_icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: windowHeight / 1.25,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            width: windowWidth / 1.15,
            marginRight: 5,
          }}>
          <TouchableOpacity>
            <Icon name="happy" color="gray" style={styles.textinput_icon} />
          </TouchableOpacity>
          <TextInput
            style={{width: windowWidth / 1.65}}
            placeholder="Mesaj giriniz..."
          />
          <TouchableOpacity>
            <Icon name="document" color="gray" style={styles.textinput_icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="camera" color="gray" style={styles.textinput_icon} />
          </TouchableOpacity>
        </View>
        {/* burası data ile oluşturulabilir */}
        <TouchableOpacity
          style={{backgroundColor: '#075e54', borderRadius: 50, padding: 5}}>
          <Icon name="send" color="white" style={{fontSize: 30}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    height: windowHeight / 13,
    width: windowWidth,
    backgroundColor: '#075e54',
    flexDirection: 'row',
  },
  header1: {
    width: windowWidth / 2,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header2: {
    width: windowWidth / 2,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    marginLeft: 10,
    color: 'white',
  },
  back_icon: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 5,
    color: 'white',
  },
  textinput_icon: {
    fontSize: 30,
    padding: 1,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  header_icon: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 30,
  },
});
