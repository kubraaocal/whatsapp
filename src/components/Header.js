import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({menu}) => {
  let _menu = null
  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <Text style={styles.title}>WhatsApp</Text>
      </View>
      <View style={styles.header2}>
        <TouchableOpacity>
          <Icon style={styles.icon} name="search-outline" />
        </TouchableOpacity>
        <View>
          <Menu
            ref={ref => (_menu = ref)}
            button={
                <TouchableOpacity onPress={() => _menu.show()}>
                  <Icon style={styles.icon} name="ellipsis-vertical"></Icon>
                </TouchableOpacity>
            }>
            <MenuItem
              onPress={() => {
                Alert.alert('PopUp Menu Button Clicked...');
              }}>
              Yeni Grup
            </MenuItem>

            <MenuItem disabled>Yeni Toplu Mesaj</MenuItem>

            <MenuDivider />

            <MenuItem
              onPress={() => {
                Alert.alert('PopUp Menu Button Clicked...');
              }}>
              Bağlı Cihazlar
            </MenuItem>
            <MenuItem
              onPress={() => {
                Alert.alert('PopUp Menu Button Clicked...');
              }}>
              Yıldızlı Mesajlar
            </MenuItem>
            <MenuItem
              onPress={() => {
                Alert.alert('PopUp Menu Button Clicked...');
              }}>
              Ayarlar
            </MenuItem>
          </Menu>
        </View>
        {/* <TouchableOpacity onPress={() => menu()}>
          <Icon style={styles.icon} name="ellipsis-vertical"></Icon>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: windowHeight / 13.5,
    width: windowWidth,
    alignSelf: 'center',
    backgroundColor: '#075e54',
    flexDirection: 'row',
  },
  header1: {
    width: windowWidth / 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  header2: {
    width: windowWidth / 2,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    marginLeft: 10,
    color: 'white',
  },
  icon: {
    fontSize: 25,
    color: 'white',
  },
});
