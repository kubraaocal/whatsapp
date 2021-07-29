import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const ImagePage = ({route}) => {

    const data=route.params;

    return (
        <Image style={{height:"100%", width:"100%"}} source={data.image}/>
    )
}

export default ImagePage

const styles = StyleSheet.create({})
