import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';



const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const History = ({navigation}) => {
  const [isModalVisible, setisModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View>
          <Image
            resizeMode="cover"
            source={require('../assests/1.jpg')}
            style={{
              borderRadius: 80/2,
              height: 80,
              width: 80,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('CameraPage')}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderWidth: 3,
                borderColor: 'white',
                borderRadius: 50,
              }}
              source={require('../assests/add1.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.view_text}>
          <Text style={styles.text_title}>Durumum</Text>
          <Text style={styles.text_text}>afdasdsdsad</Text>
        </View>
      </View>
      <Text style={{backgroundColor: 'lightgray', padding: 8}}>
        Son güncellemeler
      </Text>
      <View>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('ImagePage',{image:require('../assests/2.jpg')})}>
            <View style={{flexDirection: 'row', padding: 10}}>
              <Image
                resizeMode="cover"
                source={require('../assests/2.jpg')}
                style={{
                  borderRadius: 80/2,
                  height: 80,
                  width: 80
                }}
              />
              <View style={styles.view_text}>
                <Text style={styles.text_title}>Bir kişi</Text>
                <Text style={styles.text_text}>25 dakika önce</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_text: {
    fontSize: 17,
    color: 'gray',
  },
  text_title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
  },
  view_text: {
    margin: 15,
    width: windowWidth / 1.8,
  },
});
