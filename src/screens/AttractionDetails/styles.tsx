import { StyleSheet,Dimensions } from 'react-native'

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        color:"#ffffff",
        margin:24,
       
    },
    mainImage:{
        width:'100%',
        height:height / 2,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    icon:{
        width:30,
        height:30,
        margin:16,
        opacity:0.6,
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'rgba(256,256,256,0.35)',
        margin:16,
    },
    miniImage:{
        width:40,
        height:40,
        margin:4,
        borderRadius:10,
    },
    moreImages:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },
    moreImagesContainer:{
        position:'absolute',
        width:40,
        height:40,
        top:4,
        left:4,
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.38)',
        justifyContent:'center',
        alignItems:'center',
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:40,
    },
    title:{
        color:'#000',
        fontSize:26,
    },
    city:{
        fontSize:20,
        fontWeight:'400',
        color:'#000',
        marginTop:8,
    },
})

export default styles;