import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardSettings from '../components/CardSettings';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const DATA = [
  {
    iconname: 'key',
    nickname: 'Hesap',
    text: 'Gizlilik, güvenlik,numara değiştir',
  },
  {
    iconname: 'chatbox',
    nickname: 'Sohbetler',
    text: 'Tema, duvar kağıtları, sohbet geçmişi',
  },
  {
    iconname: 'notifications',
    nickname: 'Bildirimler',
    text: 'Mesaj, grup ve arama sesleri',
  },
  {
    iconname: 'ellipse-outline',
    nickname: 'Depolama ve veriler',
    text: 'Ağ kullanımı, otomatik indirme',
  },
  {
    iconname: 'help-circle-outline',
    nickname: 'Yardım',
    text: 'Yardım merkezi, bize ulaşın gizlilik ilkesi',
  },
];

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Profile', {
              image: require('../assests/2.jpg'),
            })
          }>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              padding: 10,
              borderBottomWidth: 0.2,
            }}>
            <Image
              resizeMode="cover"
              source={require('../assests/2.jpg')}
              style={{
                borderRadius: 60 / 2,
                height: 60,
                width: 60,
              }}
            />
            <View style={styles.view_text}>
              <Text style={styles.text_title}>Kübra Öçal</Text>
              <Text style={styles.text_text}>.</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon size={20} name="qr-code-outline" color="green" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth:0.2,paddingTop:10,paddingBottom:25}}>
        <FlatList
          style={{width: Dimensions.get('window').width, maxHeight: '100%'}}
          data={DATA}
          renderItem={({item}) => <CardSettings item={item} />}
          horizontal={false}
        />
      </View>
      <View style={{flexDirection:"row",alignItems:"center",marginTop:25,marginLeft:45}}>
          <Icon color="green" name="person" size={20} style={{marginRight:30}} />
          <Text style={styles.text_title}>Arkadaş davet edin</Text>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
          <Text>f r o m</Text>
          <Text>FACEBOOK</Text>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_text: {
    fontSize: 14,
    color: 'gray',
  },
  text_title: {
    fontStyle: 'normal',
    fontSize: 15,
  },
  view_text: {
    justifyContent: 'center',
    margin: 15,
    width: windowWidth / 1.5,
  },
});
