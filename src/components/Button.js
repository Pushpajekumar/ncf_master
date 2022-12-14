import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/Color";

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    fontSize: 25,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 30,
    },
    borderColor: colors.gray,
    borderWidth: 1,
  },
});
