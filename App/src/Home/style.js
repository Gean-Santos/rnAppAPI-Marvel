import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    back:{
        backgroundColor: '#000',
    },
    container:{
        height:1, backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
    },
    item:{
        flexDirection:'row', 
        padding: 10, 
        alignItems:'center',
        backgroundColor: '#000',
    },
    image:{
        height: 50, 
        width: 50, 
        borderRadius: 25,
        borderColor: 'red',
        borderWidth: 2
    },
    text:{
        marginLeft: 10,
        color: '#FFF',
        fontSize: 16
    },

})
export default styles;