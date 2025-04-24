import Home from "./index";
import { StatusBar } from "expo-status-bar";

export function myApp() {
  return (
    <>
      <StatusBar
        style={"light"}
        translucent={true}
        backgroundColor="transparent"
      ></StatusBar>
      <Home />
    </>
  );
}
