import { StyleSheet , Dimensions} from "react-native";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    card:{
        padding:4,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius:15,
        marginBottom:12,
    },
    image:{
        width:(width - 96)/2,
        height:120,
        borderRadius:15,
    },
    title:{
        fontSize:12,
        fontWeight:'500',
        marginTop:12,
        marginLeft:6,
        color:'#000000'
    },
    subtitle:{
        fontSize:10,
        fontWeight:'300',
        color:'rgba(0,0,0,0.5)',
    },
    icon:{
        width:12,
        height:12,
        marginRight:6,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12,
        marginLeft:6,
        marginTop:4,
    }
});

export default styles;