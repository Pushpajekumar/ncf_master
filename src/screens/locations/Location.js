import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Location = () => {
  return (
    <View style={styles.container}>
      <Text>Location</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
