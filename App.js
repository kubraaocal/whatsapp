import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './src/components/Header';
import Message from './src/screens/Message';
import Camera from './src/screens/Camera';
import Chats from './src/screens/Chats';
import CameraPage from './src/screens/CameraPage';
import History from './src/screens/History';
import Calls from './src/screens/Calls';
import ImagePage from './src/screens/ImagePage';
import MenuTop from './src/screens/MenuTop';
// import MenuTop from './src/screens/MenuTop';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTapStack = () => {
  function generateIcon(route, focused) {
    let iconName;
    switch (route.name) {
      case ' ':
        iconName = focused ? 'white' : 'lightgray';
        break;
      default:
        break;
    }
    return <Icon name={'camera'} size={25} color={iconName} />;
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {backgroundColor: '#075e54', elevation: 0},
        iconStyle: {
          width: 'auto',
          height: 30,
        },
        showIcon: true,
        showLabel: true,
        activeTintColor: 'white',
        indicatorStyle: {backgroundColor: 'white'},
        labelStyle: {fontSize: 12},
        tabStyle: {
          width: 100,
        },
      }}
      initialRouteName="Chats">
      <Tab.Screen
        name=" "
        component={Camera}
        options={({route}) => ({
          tabBarIcon: ({focused}) => generateIcon(route, focused),
        })}
      />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

const App = ({navigation}) => {
  const yolla = () => {
    navigation.navigate('MenuTop');
  }; 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TopTapStack"
          component={TopTapStack}
          options={{
            headerShown: true,
            headerTitle: props => <Header {...props} menu={yolla} />,
          }}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Message"
          component={Message}
        />
        <Stack.Screen name="CameraPage" component={CameraPage} />
        <Stack.Screen name="ImagePage" component={ImagePage} />
        <Stack.Screen name="MenuTop" component={MenuTop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
