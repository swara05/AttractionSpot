import { View, Text, SafeAreaView, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';

const AttractionDetails = ({navigation,route}) => {
    const {item} = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const slicedImages = item?.images?.length ? item?.images?.slice(0,5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;

    const onBack = () => {
        navigation.goBack();
    }

    const onGalleryNavigate = () => {
        navigation.navigate('Gallery', {images: item?.images });
    }
    console.log('diffImages:>>', diffImages)
    console.log('slicedImages:>>', slicedImages)

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
            style={styles.mainImage} 
            imageStyle={{borderRadius: 20}} 
            source={{uri : mainImage}} >
                <View style={styles.header}>
                    <Pressable onPress={onBack} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>

                    <Pressable hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/share.png')} />
                    </Pressable>
                </View>

                <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                {slicedImages?.map((image, index) => (
                <View key={image}>
                    <Image source={{uri: image}} style={styles.miniImage} />
                    {diffImages > 0 && index === slicedImages?.length - 1 ? (
                        <View style={styles.moreImagesContainer}>
                            <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                        </View>
                    ) : null}
                </View>
                ))}

                </Pressable>
            </ImageBackground>
            
            <View style={styles.headerContainer}>
                <View>
                    <Title style={styles.title} text={item?.name}/>
                    <Text style={styles.city}>{item?.city}</Text>
                </View>
                <Title style={styles.title} text={`$${item?.entry_price}`}/>
            </View>

            <InfoCard text={item?.address} icon={require('../../assets/loc.png')}/>
            <InfoCard 
            text={`OPEN\n${item?.opening_time} - ${item?.close_time}`} 
            icon={require('../../assets/sched.png')}/>
        </SafeAreaView>
    )
}

export default AttractionDetails