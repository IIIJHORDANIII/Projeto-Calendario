import { View, Text, Image, Dimensions, ScrollView } from "react-native";

import { Styles } from "./style_cards";

export default function Cards() {
  return (
    <ScrollView
      contentContainerStyle={{
        margin: 5,
        elevation: 10,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={Styles.container}>
        <View style={Styles.content}>
          <Text style={Styles.dia}>24</Text>
        </View>
        <View style={Styles.infos}>
          <Text>EVENTO TAL DE TAL </Text>
          <Text>lindo lindo lindo lindo lindo lindo és</Text>
        </View>
      </View>
    </ScrollView>
  );
}
