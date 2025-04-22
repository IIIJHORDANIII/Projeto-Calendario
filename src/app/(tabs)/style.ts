import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#373737",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  user: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: "5%",
    alignItems: "center",
    width: "87%",
    height: "13%",
    backgroundColor: "#373737",
  },
  profile: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: "50%",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    height: "87%",
    backgroundColor: "#d9d9d9",
    width: "100%",

    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  area: {
    height: "85%",
  },
  info: {
    alignItems: "flex-start",
    textAlign: "left",
    justifyContent: "center",
    height: 100,
    width: "60%",
    left: 15,
  },
  title: {
    fontSize: 20,
    color: "#d9d9d9",
  },
  subTitle: {
    fontSize: 15,
    color: "#d9d9d9",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
    height: "95%",
    borderRadius: 20,
  },
  banners: {
    height: "100%",

    borderRadius: 20,

    bottom: 10,
  },
  Image: {
    height: "100%",
  },
});
