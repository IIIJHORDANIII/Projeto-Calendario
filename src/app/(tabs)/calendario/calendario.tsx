import { View, Image, Dimensions } from "react-native";
import { Styles } from "./style";
import Calendario from "../../../components/calend";
import Cards from "../../../components/cards";

export default function secondPage() {
  return (
    <View style={Styles.container}>
      <Calendario />
      <Cards />
    </View>
  );
}
