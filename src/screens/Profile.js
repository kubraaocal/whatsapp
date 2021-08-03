import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation, route}) => {
  const data = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.view_top}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ImagePage', {image: data.image})}>
          <Image style={styles.image} source={data.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CameraPage')}
          style={styles.button_camera}>
          <Image
            style={styles.icon}
            source={require('../assests/add1.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <View style={{width: 20, margin: 15, alignItems: 'center'}}>
          <Icon size={20} name="person" color="green"/>
        </View>
        <View style={styles.view_text}>
          <View>
            <Text style={{width: 20}}>Ad</Text>
            <Text style={{width: 100}}>Kübra Öçal</Text>
            <Text style={{marginTop: 10, width: 300}}>
              Bu, kullanıcı isminiz ya da pin'iniz değildir. Bu isim WhatsApp
              kişilerinize görünecektir.
            </Text>
          </View>
          <View style={{width: 20, margin: 15}}>
            <Icon size={20} name="pencil-outline" color="gray" />
          </View>
        </View>
      </View>

      <View style={styles.view_bottom}>
        <View style={{width: 20, margin: 15, alignItems: 'center'}}>
          <Icon size={20} name="information-circle-outline" color="green" />
        </View>
        <View style={styles.view_text}>
          <View>
            <Text style={{width: 300}}>Hakkımda</Text>
            <Text style={{width: 100}}>.</Text>
          </View>
          <View style={{width: 20, margin: 15}}>
            <Icon size={20} name="pencil-outline" color="gray" />
          </View>
        </View>
      </View>

      <View style={styles.view_bottom}>
        <View style={{width: 20, margin: 15, alignItems: 'center'}}>
          <Icon size={20} name="call" color="green" />
        </View>
        <View style={{flexDirection: 'row',width:350}}>
          <View>
            <Text style={{width: 100}}>Telefon</Text>
            <Text style={{width: 200}}>+90 534 649 64 36</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  view_top: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  view_bottom: {
    flexDirection: 'row',
    margin: 5,
  },
  view_text: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    margin: 1,
  },
  icon: {
    height: 40,
    width: 40,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
  },
  button_camera: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
