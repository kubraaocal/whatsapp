import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({color,name, buttonStyle}) => {
  return (
    <TouchableOpacity style={[buttonStyle]}>
      <Icon  style={styles.icon} color={color} name={name}></Icon>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  icon: {
    // alignItems: 'center',
    // justifyContent: 'space-between',
    fontSize: 30,
    margin: 2,
  },
});
