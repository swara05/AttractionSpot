import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';

const Gallery = ({navigation , route}) => {
    const {images} = route?.params || {};

const onBack = () => {
    navigation.goBack();
}

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <FlatList 
                style={{marginBottom:32, 
                    paddingHorizontal:24}}
                data={images}
                renderItem={({item}) => (
                    <Image source={{uri: item}} style={styles.image}/>
                )}
            />

            <TouchableOpacity onPress={onBack} style={styles.backContainer}>
                <Image source={require('../../assets/back.png')} style={styles.backIcon} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Gallery