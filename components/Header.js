import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headingText}>Goal Addition App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#a065ec",
    paddingTop: 55,
    height: 90,
  },
  headingText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
  },
});
export default Header;
