import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";

export default function TaskCard({ task, onDelete }: any) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 12,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 16 }}>{task.title}</Text>

      <TouchableOpacity onPress={onDelete}>
        <Text style={{ color: "red", marginTop: 8 }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
