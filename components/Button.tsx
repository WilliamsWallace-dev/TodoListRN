import React from "react"
import {Text, TouchableHighlight, TouchableHighlightProps,StyleSheet} from "react-native"

interface Props extends TouchableHighlightProps{
    title : string,
    type : "primary" | "secondary"
}

export const Button = ({title, type = "primary", ...rest} : Props)=>{

    const variantStyle = type == "primary" ? styles.buttonPrimary : styles.buttonSecondary

    return (
        <TouchableHighlight
        style = {[styles.buttonCommon, variantStyle]}
        >
            <Text style = {styles.title} >{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonCommon : {
        width : 200,
        height : 50,
        display :"flex",
        justifyContent : "center",
        alignItems : "center",
      },
      buttonPrimary : {
        backgroundColor : "#550a95"
      },
      buttonSecondary : {
        borderWidth : 2,
        borderColor : "#550a70"
      },
      title : {
        fontSize : 16,
        fontWeight : "bold",
        color : "white"
      }
})