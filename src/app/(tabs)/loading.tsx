import { View, Image } from "react-native";
import { Styles } from "./style_loading";

export default function Loading() {
  return (
    <View style={Styles.container}>
      <Image source={require("../../../assets/images/logo.png")} />
    </View>
  );
}
