import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "native-base";

export const Screen = ({ children }) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <StatusBar barStyle={"dark-content"} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
