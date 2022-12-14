import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/Color";

const Circle = ({ icon }) => {
  return <View style={styles.circle}>{icon}</View>;
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.circleBackground,
    justifyContent: "center",
    alignItems: "center",
  },
});
