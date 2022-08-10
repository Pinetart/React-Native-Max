import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler, visible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => {
                addGoalHandler(enteredGoalText);
                setEnteredGoalText("");
              }}
              title="Add Goal"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={() => {}} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    padding: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
  },
  button: {
    width: "50%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
