import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Card = ({onPress, isTurnedOver, children}) => {
    return(
        //Pressable es un componente que permite detectar el evento de presionar
        <Pressable onPress={onPress} style={isTurnedOver ? styles.cardUp : styles.cardDown}>
            {
                isTurnedOver ? (
                    <Text style={styles.text}>
                        {children}
                    </Text>
                ):(
                    <Text style={styles.text}>
                        ?
                    </Text>
                )
            }
        </Pressable>
    )
}


const styles = StyleSheet.create({
    cardUp:{
        width:70,
        height:70,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: '#1e293b',
    },
    text:{
        fontSize: 30,
        color: "#334155"
    },
    cardDown:{
        width:70,
        height:70,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: '#1e293b',
        borderWidth:10,
        borderColor: '#334155'
    },
})

export default Card;