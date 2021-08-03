import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderProfile = ({navigation,image,nickname}) => {
  return (
    <View>
      <View
        style={{
          height: windowHeight / 15,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View style={[styles.view, {justifyContent: 'flex-start'}]}>
          <TouchableOpacity onPress={()=> navigation.navigate('Message')}>
            <Icon name="arrow-back-outline" size={30} />
          </TouchableOpacity>
          <Text>{nickname}</Text>
        </View>
        <View style={[styles.view, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{height: windowHeight / 3, width: '100%'}}
      />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  view: {
    width: windowWidth / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
