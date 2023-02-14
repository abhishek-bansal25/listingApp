import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ItemCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.desc}</Text>
      </View>
      <View style={{alignSelf:"center"}}>
        <Text>Quantity: {props.qty}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"#fff",
        width:"95%",
        padding:20,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#d1cb5a",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
        marginTop:10
    },
    title: {
        fontSize:18,
        fontWeight:"500"
    }
})