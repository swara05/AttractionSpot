import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AttractionCard = ({title, subtitle, imgSrc, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card,style]}>
      <Image style={styles.image} source={{uri: imgSrc}}/>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image style={styles.icon} source={require('../../assets/location.png')}/>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(AttractionCard);