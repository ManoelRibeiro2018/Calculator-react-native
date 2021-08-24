import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native' 

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 2,
        borderColor: '#888'

    }
})

export default props =>{
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label} </Text>
        </TouchableHighlight>
    )
}