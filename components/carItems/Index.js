import React from 'react'
import {View,Text,ImageBackground} from 'react-native'
import styles from './Styles'
import StyledButton from '../styledButton/index'
const CarItem=(props)=>{
  const{name,tagline,taglineCTA,image}=props.car  
    return(
        <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image}/>
        <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
        <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </View>
      <View style={styles.buttonContainer}>
      <StyledButton type="primary" content={"Custom Button"} onPress={()=>console.warn("Custom button was Pressed the button")}/>
        <StyledButton type="secondary" content={"Existing Inventory"} onPress={()=>console.warn("Existing Inventory was Pressed the button")}/>
      </View>
      </View>     
    )
}
export default CarItem