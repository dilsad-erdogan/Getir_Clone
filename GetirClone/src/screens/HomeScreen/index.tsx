import React from 'react'
import { View, Text, Image } from "react-native"
import styles from "./styles"
import Entypo from '@expo/vector-icons/Entypo';

function index() {
  return (
    <View style={styles.headerMain}>
        <View style={styles.headerOne}>
            <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
            <View style={styles.headerOneView}>
                <Text style={{fontWeight: 600, fontSize: 16}}>Ev</Text>
                <Text style={{fontWeight: 400, fontSize: 12, color: '#6E7480', marginLeft: 6, marginRight: 3}}>Selehaddini Eyyübi Mah. Vekil Sokak</Text>
                <Entypo name="chevron-right" size={22} color="#5D3EBD" />
            </View>
        </View>

        <View></View>
    </View>
  )
}

export default index