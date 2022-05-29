import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "native-base";

export const Screen = ({ children }) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <StatusBar barStyle={"dark-content"} />
      <View style={[styles.view]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});
