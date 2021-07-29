import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Images = ({image}) => {
    return (
        <Image style={styles.image} source={image}></Image>
    )
}

export default Images

const styles = StyleSheet.create({
    image: {
        flex:1,
        maxHeight: "100%",
        maxWidth:"100%"
    }
})
