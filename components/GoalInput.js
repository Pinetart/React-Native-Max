import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        onPress={() => {
          addGoalHandler(enteredGoalText);
          setEnteredGoalText("");
        }}
        title="Add Goal"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },
});

export default GoalInput;
