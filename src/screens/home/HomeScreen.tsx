import { View, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";

import TaskCard from "../../components/TaskCard";

import { globalStyles } from "../../theme/globalStyles";

import { useEffect } from "react";

import { getTasks, deleteTaskApi } from "../../api/taskApi";

import { setTasks } from "../../redux/taskSlice";

export default function HomeScreen() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const dispatch = useDispatch();

  // app open hote hi API se tasks fetch
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasks();

      dispatch(setTasks(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onDelete={async () => {
              await deleteTaskApi(item.id);

              // delete ke baad dobara fetch
              loadTasks();
            }}
          />
        )}
      />
    </View>
  );
}
