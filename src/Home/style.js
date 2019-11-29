import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    back:{
        height: "100%",
        alignItems: 'center',
        backgroundColor: '#000'
    },
    flat:{
        backgroundColor: '#000',
        borderTopWidth: 2,
        borderTopColor: 'red',
        width:'90%'
    },
    container:{
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
    viewPicker:{
        flexDirection: 'row',
        backgroundColor: '#000',
        width: '90%',
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        marginVertical: 10
    },
    picker:{
        width: '60%',
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textPicker:{
        color: '#FFF',
        fontSize:22,
        fontWeight: 'bold',
    },

})
export default styles;