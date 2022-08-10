import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler, endAddGoalHandler, visible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
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
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => {
                endAddGoalHandler();
              }}
              title="Cancel"
              color="#f31282"
            />
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
    backgroundColor: "#311b6b",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
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
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
