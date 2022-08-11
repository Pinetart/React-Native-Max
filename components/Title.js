import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4e0329",
    textAlign: "center",
    padding: 12,
    borderColor: "#4e0329",
    borderWidth: 2,
  },
});

export default Title;
