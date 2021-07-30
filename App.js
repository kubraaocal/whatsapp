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
import Settings from './src/screens/Settings';
import Profile from './src/screens/Profile';
import PersonProfile from './src/screens/PersonProfile';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const ChatStack=()=>{
  return(
    <Stack.Navigator>
          <Stack.Screen
          name="Chats"
          component={Chats}
          options={{
            headerShown: false,
            headerTitle:props => <Header {...props}/>
          }}
        />
    </Stack.Navigator>

  )
}

const CameraStack=()=>{
  return(
    <Stack.Navigator>
          <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            headerShown: false,
            headerTitle:props => <Header {...props}/>
          }}
        />
    </Stack.Navigator>

  )
}

const HistoryStack=()=>{
  return(
    <Stack.Navigator>
          <Stack.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
            headerTitle:props => <Header {...props}/>
          }}
        />
    </Stack.Navigator>

  )
}
const CallsStack=()=>{
  return(
    <Stack.Navigator>
          <Stack.Screen
          name="Calls"
          component={Calls}
          options={{
            headerShown: false,
            headerTitle:props => <Header {...props}/>
          }}
        />
    </Stack.Navigator>

  )
}

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
      initialRouteName="ChatStack">
      <Tab.Screen
        name=" "
        component={Camera}
        options={({route}) => ({
          tabBarIcon: ({focused}) => generateIcon(route, focused),
        })}
      />
      <Tab.Screen name="ChatStack" component={ChatStack} />
      <Tab.Screen name="HistoryStack" component={HistoryStack} />
      <Tab.Screen name="CallsStack" component={CallsStack} />
    </Tab.Navigator>
  );
};

const App = ({navigation}) => {
 
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="TopTapStack"
          component={TopTapStack}
          options={{
            headerShown: true,
            headerTitle:(props)=> <Header navigation={navigation}/>
          }}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Message"
          component={Message}
        />
        <Stack.Screen name="CameraPage" component={CameraPage} />
        <Stack.Screen name="ImagePage" component={ImagePage} />
        <Stack.Screen name="Ayarlar" component={Settings} />
        <Stack.Screen name="Profile" options={{headerStyle:{backgroundColor:"green"},headerTintColor:"white"}} component={Profile} />
        <Stack.Screen name="PersonProfile" options={{headerShown: false}} component={PersonProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
