import { View } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { globalStyles } from "../../theme/globalStyles";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  return (
    <View style={globalStyles.container}>
      <Input placeholder="Email" onChangeText={setEmail} />

      <Button title="Login" onPress={() => dispatch(login({ email }))} />
    </View>
  );
}
