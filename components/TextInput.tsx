import React from 'react'
import { TextInputProps, View, Text,StyleSheet,TextInput as TextInputRN } from 'react-native'

interface Props extends TextInputProps {

}

export const TextInput = (props : TextInputProps)=>{

    return(
        <TextInputRN
        style = {styles.wrapper}
        {...props}
        ></TextInputRN>
    )
}

const styles = StyleSheet.create({
    wrapper : {
        width : 200,
        height : 50,
        borderWidth : 2,
        borderColor : "#55069d",
        padding : 8,
        borderRadius : 8
    }
})