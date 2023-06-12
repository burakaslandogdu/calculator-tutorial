import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
import { ThemeContext } from "../src/context/ThemeContext";
import styles from "../src/styles/index_style";
import Button from "../src/components/Button";
import MyKeyboard from "../src/components/MyKeyboard";

export default function index() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style="auto" />
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyboard />
      </View>
    </ThemeContext.Provider>
  );
}
