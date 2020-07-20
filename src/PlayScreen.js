import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const rock = require("./signs/rock.jpg");
const paper = require("./signs/paper.jpg");
const scissors = require("./signs/scissors.jpg");

const bgColors = ["#34495e", "#e67e22", "#1abc9c"];

const randomImage = () => {
  const emojis = [rock, paper, scissors];
  const randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

export default function PlayScreen(props) {
  const [counter, setCounter] = useState(3);

  useEffect(() => {

    if (counter === 0) return;

    const timer = setTimeout(() => {
      setCounter((prev) => prev- 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <View
      style={StyleSheet.compose(
        { backgroundColor: bgColors[counter - 1] },
        styles.container
      )}
    >
      {counter < 1 ? (
        <>
          <Image style={styles.image} source={randomImage()} />
          <View style={styles.button}>
            <Button title="PLAY AGAIN" onPress={() => setCounter(3)} />
          </View>
        </>
      ) : (
        <Text style={styles.counter}>{counter}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 150,
    color: "#fff",
  },
  image: {
    width: 210,
    height: 210,
  },
  button: {
    position: "absolute",
    bottom: 45,
    width: 200,
  },
});
