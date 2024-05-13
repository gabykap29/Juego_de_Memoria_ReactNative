import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Memoria</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Game")}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Api")}>
        <Text style={styles.buttonText}>Puntuaciones</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: "#fff",
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#4f46e5",
    padding: 15, // Increased padding for better spacing
    borderRadius: 10,
    marginTop: 10, // Added margin for spacing between buttons
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: 'center', // Center text within buttons
  },
});

export default Inicio;
