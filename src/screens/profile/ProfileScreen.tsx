import { View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import Button from "../../components/Button";
import { globalStyles } from "../../theme/globalStyles";

export default function ProfileScreen() {
  const dispatch = useDispatch();

  return (
    <View style={globalStyles.container}>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
}
