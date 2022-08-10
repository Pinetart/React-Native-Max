import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => onDeleteItem(id)
    }
    style={({pressed})=> pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: { padding: 8, color: "white" },
  pressedItem: {
    opacity: 0.8
  }
});

export default GoalItem;
