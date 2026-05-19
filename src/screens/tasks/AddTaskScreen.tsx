import { View } from "react-native";

import Input from "../../components/Input";

import Button from "../../components/Button";

import { useState } from "react";

import { globalStyles } from "../../theme/globalStyles";

import { createTask } from "../../api/taskApi";

export default function AddTaskScreen() {
  const [title, setTitle] = useState("");

  return (
    <View style={globalStyles.container}>
      <Input placeholder="Task title" value={title} onChangeText={setTitle} />

      <Button
        title="Add Task"
        onPress={async () => {
          try {
            await createTask(title);

            setTitle("");

            alert("Task Added!");
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </View>
  );
}
