import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlayScreen from "./src/PlayScreen";

export default function App() {
  const [play, setPlay] = useState(false);

  return play ? (
    <>
    <PlayScreen />
    </>
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors Game</Text>
      <Text style={styles.emoji}>🗿 📄 ✂️</Text>
      <View style={styles.button}>
        <Button title="PLAY" onPress={() => setPlay(true)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F44336",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    color: '#fff'
  },
  emoji: {
    fontSize: 45,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: 250,
  },
});
