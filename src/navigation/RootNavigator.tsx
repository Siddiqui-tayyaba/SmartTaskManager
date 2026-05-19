import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AuthStack from "./AuthStack";
import MainTabs from "./MainTabs";

export default function RootNavigator() {
  const user = useSelector((state: RootState) => state.auth.user);

  return user ? <MainTabs /> : <AuthStack />;
}
