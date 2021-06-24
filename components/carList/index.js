import React from 'react'
import {View,Text,FlatList,Dimensions} from 'react-native'
import cars from './cars'
import styles from './Styles'
import CarItem from '../carItems/Index'

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList data={cars} renderItem={({item})=>< CarItem car={item}/> } showsVerticalScrollIndicator={false} snapToAlignment={'start'} decelerationRate={'fast'} snapToInterval={Dimensions.get('window').height}  keyExtractor={(item, index) => index.toString()}/>
        </View>
    )
}

export default CarList
