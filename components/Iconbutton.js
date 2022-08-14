import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  pressed: { opacity: 0.5 },
});
export default IconButton;
