import React, {Component} from 'react'
import { 
    TouchableOpacity, 
    View, 
    FlatList, 
    Text, 
    Image, 
    Alert,
    Picker
} from 'react-native'
import styles from './style'
import md5 from 'js-md5';
import axios from 'axios';
import api from '../api'
const letras = require('../letters.json');

const PUBLIC_KEY = 'a0766465ea4b57ae125da9e38d29844b'
const PRIVATE_KEY = '2614f605fa45ccec50cbfdc9fbaa48b8d3d0e9c3'
const timestamp = Number(new Date());
const hash = md5.create();

export default class Home extends Component {
    
     static navigationOptions = {
        headerTitle: 'Marvel Heroes',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26
            },
        headerStyle:{
            backgroundColor: 'red',
        },
        headerTintColor: '#FFF',
        
     }
     state = {
         data:[],
         letters:[],
         letter:''
     }
    
    componentDidMount() {
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        .then(per => per.data.data.results).then(personagens => this.setState({data:personagens}))
        .catch(error => console.log(error))  

        this.setState({letters:letras.letters})

    }
    _byLetter = (letter) =>{
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&nameStartsWith=${letter}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        .then(per => per.data.data.results).then(personagens => this.setState({data:personagens}))
        .then(()=> this.setState({letter:letter}))
        .catch(error => console.log(error))  
    }
    _renderItem = ({item}) => {
        return  (
            <TouchableOpacity onPress={()=>this._onItemPress(item)} 
                style={styles.item}>
                <Image style={styles.image} 
                source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    _onItemPress = (item) => {
        this.props.navigation.navigate('Description', {hero: item})
    } 
    render() {
        return (
            <View style={styles.back}>
                <View style={styles.viewPicker}>
                    <Text style={styles.textPicker}>Starts With: </Text>
                        <Picker
                        style={styles.picker}
                        selectedValue={this.state.letter}
                        onValueChange={(itemValue, itemIndex) =>
                        this._byLetter(itemValue)
                        }>
                            <Picker.Item label="Letter" value="" />
                            {this.state.letters.map(letra =>
                            <Picker.Item label={letra.letter} 
                            value={letra.letter}  
                                        key={letra.id}/>)
                                    }
                                    </Picker>
                                </View>
                <FlatList 
                style={styles.flat}
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => String (item.id)}
                ItemSeparatorComponent={()=> <View style={styles.container} />}
            />
            </View>
        )
    }
}
