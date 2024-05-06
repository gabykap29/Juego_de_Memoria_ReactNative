import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Inicio = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Juego de Memoria</Text>
            <Pressable style={styles.button}
                onPress={()=> navigation.navigate("Game")}
            >
                <Text style={styles.text}>Iniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#1e293b",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: "#fff",
        fontSize: 24,
        marginBottom: 20
    },
    button:{
        backgroundColor: "#4f46e5",
        padding: 10,
        borderRadius: 10
    }
})

export default Inicio;