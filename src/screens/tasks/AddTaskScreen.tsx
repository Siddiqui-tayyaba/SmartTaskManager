import { View } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { globalStyles } from "../../theme/globalStyles";

export default function AddTaskScreen() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <View style={globalStyles.container}>
      <Input placeholder="Task title" onChangeText={setTitle} />

      <Button
        title="Add Task"
        onPress={() => {
          dispatch(addTask(title));
          setTitle("");
        }}
      />
    </View>
  );
}
