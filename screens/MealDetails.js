import { Text } from "react-native";

const MealDetails = ({ route }) => {
  const mealId = route.params.mealId;

  return <Text>This is the meal detail screen {mealId}</Text>;
};

export default MealDetails;
