import { TouchableOpacity, Text } from "react-native";
import { colors } from "../theme/colors";

export default function Button({ title, onPress }: any) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", fontWeight: "600" }}>{title}</Text>
    </TouchableOpacity>
  );
}
