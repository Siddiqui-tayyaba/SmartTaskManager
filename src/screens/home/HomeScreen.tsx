import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import TaskCard from "../../components/TaskCard";
import { deleteTask } from "../../redux/taskSlice";
import { globalStyles } from "../../theme/globalStyles";

export default function HomeScreen() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onDelete={() => dispatch(deleteTask(item.id))}
          />
        )}
      />
    </View>
  );
}
