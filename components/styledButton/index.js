import React from 'react'
import {View,Pressable,Text} from 'react-native'
import styles from './Styles'

const StyledButton = (props) => {
    const{type,content,onPress}=props
    const textColor=type==='primary'?'#fff':'#000'
    const backgroundColor=type==="primary"?'#000':'#fff'
    const textContent=content
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button,{backgroundColor:backgroundColor}]} onPress={()=>onPress()}>
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
