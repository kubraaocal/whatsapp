import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Images from './Images'
import Card from './Card'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Button from "./Button"

const DATA = [
    {
        icon: "chatbox",
        color:"#075e54",

    },
    {
        icon: "call",
        color:"#075e54",

    },
    {
        icon: "videocam",
        color:"#075e54",

    },
    {
        icon: "information-circle",
        color:"#075e54",
    },
]


const ImageModal = ({deger,image}) => {
    
    const Item = ( {item} ) => (
        <Button buttonStyle={styles.button} color={item.color} name={item.icon} />
    ) 

    const RenderItem = ({ item }) => {
        return (
            <Item
                item={item}
            />

        );
    }


    return (
        <TouchableOpacity style={styles.container} onPress={() => deger()}>
            <View style={styles.modal}>
                <Images  image={image}></Images>
                <View style={styles.bottom}>
                    <FlatList
                        style={{ width: windowWidth, maxHeight: "100%" }}
                        data={DATA}
                        renderItem={RenderItem}
                        scrollEnabled={false}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ImageModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        flex:0.5,
        height: windowHeight / 2.4,
        width: windowWidth - 80,
        backgroundColor: "white",
        flexDirection:"column"
    },
    bottom: {
        flex: 0.15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "100%",
        maxWidth:"100%",
    },
    button:{
        paddingRight:25,
        paddingLeft:25,
    }
})
