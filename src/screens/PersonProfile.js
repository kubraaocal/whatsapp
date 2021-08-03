import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderProfile from '../components/HeaderProfile';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    image: require('../assests/2.jpg'),
  },
  {
    image: require('../assests/3.jpg'),
  },
  {
    image: require('../assests/1.jpg'),
  },
  {
    image: require('../assests/2.jpg'),
  },
  {
    image: require('../assests/4.jpg'),
  },
  {
    image: require('../assests/1.jpg'),
  },
  {
    image: require('../assests/3.jpg'),
  },
];

const PersonProfile = ({navigation,route}) => {
    const data=route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView>
      <HeaderProfile image={data.image} nickname={data.nickname} navigation={navigation}/>
      <View style={styles.view}>
        <View style={styles.medya_text}>
          <View style={styles.view_left}>
            <Text style={[styles.text_green,{paddingStart:10}]}>Medya, bağlantılar ve belgeler</Text>
          </View>
          <View style={styles.view_right}>
            <Text>{DATA.length}</Text>
            <Icon name="chevron-forward-outline"></Icon>
          </View>
        </View>
        <ScrollView horizontal={true}>
          {DATA.map(e => {
            return <Image style={styles.profile_image} source={e.image} />;
          })}
        </ScrollView>
      </View>
      <View style={[styles.view, {paddingStart: 15}]}>
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: windowWidth / 2}}>
              <Text>Bildirimleri sessize al</Text>
            </View>
            <View style={styles.view_switch}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Özel bildirimler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop: 15, paddingBottom: 15}}>
          <Text>Medya görünürlüğü</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.view, {paddingStart: 15}]}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.view_left}>
            <Text>Süreli mesaslar</Text>
            <Text>Kapalı</Text>
          </View>
          <View style={styles.view_right}>
            <Icon style={styles.icon_green} size={20} name="timer" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.view_left}>
            <Text>Şifreleme</Text>
            <Text>Kapalı</Text>
          </View>
          <View style={styles.view_right}>
            <Icon style={styles.icon_green} size={20} name="lock-closed" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.view, {paddingStart: 15}]}>
        <View style={[styles.view_left, {marginBottom: 10, marginTop: 10}]}>
          <Text style={styles.text_green}>Hakkımda ve telefon numarası</Text>
        </View>
        <View
          style={{
            paddingBottom: 15,
            borderBottomWidth: 0.2,
            borderColor: 'gray',
          }}>
          <Text>Süreli mesajlar</Text>
          <Text style={styles.text_gray}>Kapalı</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.view_left}>
              <Text>0534 649 6436</Text>
              <Text style={styles.text_gray}>Mobil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon style={styles.icon_green} size={25} name="chatbox" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon style={styles.icon_green}  size={25} name="call" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon style={styles.icon_green}  size={25} name="videocam" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <View style={[styles.view,{flexDirection:"row",alignItems:"center",padding:10}]}>
            <Icon style={{marginRight:5}} color="red" size={25} name="ban"/>
            <Text style={styles.text_red}>Engelle</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.view,{flexDirection:"row",alignItems:"center",padding:10}]}>
            <Icon style={{marginRight:5}} color="red" size={25} name="heart-dislike"/>
            <Text style={styles.text_red}>Kişiyi şikayet et</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PersonProfile;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
  },
  button: {
    flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
  },
  medya_text: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  view_left: {
    justifyContent: 'flex-start',
    width: windowWidth / 2,
  },
  view_right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: windowWidth / 2.2,
  },

  profile_image: {
    margin: 5,
    height: windowHeight / 7,
    width: windowWidth / 4,
  },
  view_switch: {
    width: windowWidth / 2.1,
    justifyContent: 'center',
  },
  button2: {
    flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 15,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  text_red:{
      color:"red"
  },
  icon_green:{
      color:"green",
  },
  text_gray:{
      color:"gray"
  },
  text_green:{
      color:"green"
  }
});
