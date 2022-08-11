import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { ButtonStyles } from "../styles/ButtonStyles";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ selectedNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < selectedNumber) ||
      (direction == "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("Dont lie!", "You know that this is wrong!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={ButtonStyles.buttonsContainer}>
          <View style={ButtonStyles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler("lower");
              }}
            >
              -
            </PrimaryButton>
          </View>
          <View style={ButtonStyles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler("greater");
              }}
            >
              +
            </PrimaryButton>
          </View>
        </View>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
