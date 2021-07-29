import { IteratorNext } from 'es-abstract'
import React from 'react'
import { StyleSheet, Text, View,ScrollView,FlatList,Dimensions} from 'react-native'
import Button from '../components/Button'
import Card from "../components/Card"

const DATA = [
    {
        image: require("../assests/4.jpg"),
        nickname: "Hatice Öçal",
        text: "Merhaba, nasılsın?",
    },
    {
        image: require("../assests/1.jpg"),
        nickname: "Öçal",
        text: "asasaasf",
    },
    {
        image: require("../assests/2.jpg"),
        nickname: "asdasd",
        text: "asasaasf",
    },
    {
        image: require("../assests/3.jpg"),
        nickname: "Öçqweqweal",
        text: "asasaasf",
    },
    {
        image: require("../assests/4.jpg"),
        nickname: "Öçtytytyual",
        text: "asasaasf",
    },
    {
        image: require("../assests/2.jpg"),
        nickname: "Öçal",
        text: "asasaasf",
    },
    {
        image: require("../assests/3.jpg"),
        nickname: "Öçal",
        text: "asasaasf",
    },
    {
        image: require("../assests/4.jpg"),
        nickname: "Öçal",
        text: "asasaasf",
    },
    {
        image: require("../assests/2.jpg"),
        nickname: "Öçal",
        text: "asasaasf",
    }
]

const Chats = ( {navigation} ) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    style={{ width: Dimensions.get('window').width, maxHeight: "100%" }}
                    data={DATA}
                    renderItem={({item})=> <Card  item={item} navigation={navigation}/>}
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
