import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderColor: "white",
    borderWidth: 2,
  },
});

export default Title;
