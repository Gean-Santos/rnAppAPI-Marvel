import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';

import styles from './styles';

export default props => {
  return(
    <TouchableOpacity 
    onPress={()=>props.onItemPress(props.id)} 
    style={styles.item}
    >
      <Image style={styles.image} 
        resizeMethod='resize'
        resizeMode='stretch'
        source={{uri: `${props.thumbnail.path}.${props.thumbnail.extension}` }} 
      />
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  ); 
}