import { View, Text, Image } from "react-native";
import { Styles } from "./style";

export default function Home() {
  return (
    <View className="Container" style={Styles.container}>
      <View className="user" style={Styles.user}>
        <View className="profile" style={Styles.profile}>
          <Image source={require("../../../assets/images/profile.png")}></Image>
        </View>
        <View className="info" style={Styles.info}>
          <Text className="title" style={Styles.title}>
            Assembléia de Deus
          </Text>
          <Text className="subTitle" style={Styles.subTitle}>
            Congreg. Vicente
          </Text>
        </View>
      </View>
      <View className="content" style={Styles.content}>
        <View className="areaBanner" style={Styles.area}>
          <View className="banner" style={Styles.banner}>
            <Image
              className="banners"
              source={require("../../../assets/images/Arte1.png")}
              style={Styles.banners}
            ></Image>
          </View>
        </View>
      </View>
    </View>
  );
}
