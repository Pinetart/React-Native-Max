import { StyleSheet, Text, View } from "react-native";

const GameScreen = () => {
  return (
    <View styles={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* Guess button */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <View>Log Rounds</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 12 },
});

export default GameScreen;
