import { IteratorNext } from 'es-abstract'
import React from 'react'
import { StyleSheet, Text, View,ScrollView,FlatList,Dimensions} from 'react-native'
import Button from '../components/Button'
import CardCall from "../components/CardCall"

const DATA = [
    {
        image: require("../assests/4.jpg"),
        nickname: "Hatice Öçal",
        text: "5 dakika önce",
        icon:"trending-up-sharp"
    },
    {
        image: require("../assests/1.jpg"),
        nickname: "Öçal",
        text: "5 dakika önce",
        icon:"trending-up-sharp"
    },
    {
        image: require("../assests/2.jpg"),
        nickname: "asdasd",
        text: "5 dakika önce",
        icon:"trending-up-sharp"
    },
    {
        image: require("../assests/3.jpg"),
        nickname: "Öçqweqweal",
        text: "5 dakika önce",
        icon:"trending-up-sharp"
    },
    {
        image: require("../assests/4.jpg"),
        nickname: "Öçtytytyual",
        text: "5 dakika önce",
        icon:"trending-down-sharp"
    },
    {
        image: require("../assests/2.jpg"),
        nickname: "Öçal",
        text: "5 dakika önce",
        icon:"trending-down-sharp"
    },
    {
        image: require("../assests/3.jpg"),
        nickname: "Öçal",
        text: "5 dakika önce",
        icon:"trending-up-sharp"
    },
    {
        image: require("../assests/4.jpg"),
        nickname: "Öçal",
        text: "5 dakika önce",
        icon:"trending-down-sharp"
    },
    {
        image: require("../assests/2.jpg"),
        nickname: "Öçal",
        text: "5 dakika önce",
        icon:"trending-up-sharp"
    }
]

const Chats = ( {navigation} ) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    style={{ width: Dimensions.get('window').width, maxHeight: "100%" }}
                    data={DATA}
                    renderItem={({item})=> <CardCall  item={item} navigation={navigation}/>}
                    horizontal={false}
                />
            </ScrollView>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
